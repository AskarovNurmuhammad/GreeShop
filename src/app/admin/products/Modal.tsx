"use client";
import { useState, useRef, useEffect } from "react";
import { UploadCloud } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/utils/store";
import { setDisplayModal, setProductEdit } from "@/app/utils/slice";
import {
  editProduct,
  getCotegories,
  getProducts,
  postProduct,
} from "../Functions";
import { Cotegory } from "@/app/lib/definitions";

type ProductFormData = {
  id?: number;
  name: string;
  cotegory: string;
  description: string;
  price: string;
  images: string[];
  quantity: string;
  status: "published" | "draft";
};

const Modal = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    description: "",
    cotegory: "",
    price: "",
    quantity: "",
    images: [],
    status: "published",
  });

  const dispatch = useDispatch();
  const display = useSelector((state: RootState) => state.displayModal);
  const isEdit = useSelector((state: RootState) => state.productEdit);

  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [cotegories, setCotegories] = useState<Cotegory[]>([]);
  let close = 0;
  let prev = "";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: name === "price" || name === "quantity" ? Number(value) : value,
      };
    });
  };

  const handleImageChange = (files: FileList | null) => {
    if (!files) return;

    for (const itm of files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (!imagePreview.find((itm) => itm === (reader.result as string))) {
          imagePreview.push(reader.result as string);

          console.log(imagePreview);

          setImagePreview([...imagePreview, reader.result as string]);
        }
      };
      reader.readAsDataURL(itm);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files) {
      handleImageChange(files);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Supabase / backend bilan bog‘lab ishlatish mumkin

    (!isEdit ? postProduct(formData) : editProduct(formData)).then((res) => {
      console.log(res);
      setFormData({
        name: "",
        description: "",
        cotegory: "",
        price: "",
        quantity: "",
        images: [],
        status: "published",
      });
      setImagePreview([]);
      dispatch(setDisplayModal("hidden"));
      if (isEdit) {
        dispatch(setProductEdit(0));
      }
    });
  };

  useEffect(() => {
    getCotegories().then((res) => {
      setCotegories(res!);
    });
  }, []);

  useEffect(() => {
    setFormData((prev) => {
      if (imagePreview[0]) {
        return { ...prev, images: imagePreview };
      } else {
        return prev;
      }
    });
  }, [imagePreview]);

  useEffect(() => {
    if (isEdit) {
      getProducts().then((res) => {
        const foundProduct = res?.find((itm) => itm.id === isEdit);
        setFormData(foundProduct);
        setImagePreview(foundProduct.images);
      });
    }
  }, [isEdit]);

  return (
    <div
      onClick={() => {
        close += 1;
        if (display === "hidden") {
          dispatch(setDisplayModal("flex"));
          return;
        }
        if (close % 2 === 1) {
          dispatch(setDisplayModal("hidden"));
        }
      }}
      className={`fixed inset-0 ${display} items-center justify-center bg-[rgba(0,0,0,0.4)] `}
    >
      <form
        onClick={() => {
          close = 1;
        }}
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4 overflow-auto h-[95vh]"
      >
        <h2 className="text-xl font-semibold text-gray-800">Add New Product</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="cotegory"
            value={formData.cotegory}
            onChange={(e) => {
              handleChange(e);
            }}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Select a category</option>
            {cotegories.map((itm, i) => {
              return (
                <option key={i} value={itm.name}>
                  {itm.name}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image
          </label>

          <div
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10 cursor-pointer hover:bg-gray-50"
          >
            <div className="text-center overflow-auto">
              {imagePreview[0] ? (
                <div className="flex gap-2">
                  {imagePreview.map((itm, i) => {
                    if (prev === itm) return;
                    prev = itm;
                    return (
                      <img
                        key={i}
                        src={itm}
                        alt="Preview"
                        className="mx-auto h-40 object-contain rounded-md"
                      />
                    );
                  })}
                </div>
              ) : (
                <>
                  <UploadCloud className="mx-auto h-8 w-8 text-gray-400" />
                  <div className="mt-4 flex text-sm text-gray-600 justify-center">
                    <span className="font-semibold text-green-600">
                      Upload a file
                    </span>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </>
              )}
            </div>
            <input
              multiple
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e.target.files)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="published"
                checked={formData.status === "published"}
                onChange={handleChange}
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-700">Published</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="draft"
                checked={formData.status === "draft"}
                onChange={handleChange}
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-700">Draft</span>
            </label>
          </div>
        </div>

        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={() => {
              dispatch(setDisplayModal("hidden"));
            }}
            type="button"
            className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
