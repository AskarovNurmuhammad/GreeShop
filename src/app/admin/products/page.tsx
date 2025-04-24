"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/app/supbaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Ellipsis } from "lucide-react";

const Product = () => {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  const [formData, setFormData] = useState({
    image: null as File | null,
    imageBase64: "",
    title: "",
    description: "",
    Category: null as string | null,
    Price: "",
    published: false,
  });

  async function fetchProducts() {
    const { data, error } = await supabase.from("product").select("*");
    if (error) {
      console.error("Mahsulotlarni olishda xatolik:", error.message);
    } else {
      setProducts(data || []);
    }
  }

  async function fetchCategories() {
    const { data, error } = await supabase.from("category").select("*");
    if (error) {
      console.error("Kategoriyalarni olishda xatolik:", error.message);
    } else {
      setCategories(data || []);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  async function handleSubmit() {
    try {
      let imageBase64 = formData.imageBase64 || editingProduct?.images || null;

      const productData = {
        title: formData.title,
        description: formData.description,
        categoryId: formData.Category,
        price: formData.Price,
        images: imageBase64,
        published: formData.published,
      };

      if (editingProduct) {
        const { error } = await supabase
          .from("product")
          .update(productData)
          .eq("id", editingProduct.id);
        if (error) throw error;
        alert("Mahsulot yangilandi!");
      } else {
        const { error } = await supabase.from("product").insert([productData]);
        if (error) throw error;
        alert("Mahsulot qo‘shildi!");
      }

      fetchProducts();
      closeModal();
    } catch (err: any) {
      alert("Xatolik: " + err.message);
    }
  }

  function handleInputChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "Category"
          ? value !== ""
            ? value
            : null
          : value,
    }));
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: file,
          imageBase64: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  }

  function closeModal() {
    setShowModal(false);
    setEditingProduct(null);
    setFormData({
      image: null,
      imageBase64: "",
      title: "",
      description: "",
      Category: null,
      Price: "",
      published: false,
    });
  }

  function toggleMenu(index: number) {
    setActiveMenu(activeMenu === index ? null : index);
  }

  function handleEdit(product: any) {
    setEditingProduct(product);
    setFormData({
      image: null,
      imageBase64: product.images,
      title: product.title,
      description: product.description,
      Category: product.categoryId,
      Price: product.price,
      published: product.published,
    });
    setShowModal(true);
    setActiveMenu(null);
  }

  async function handleDelete(id: number) {
    if (confirm("Mahsulotni o‘chirmoqchimisiz?")) {
      const { error } = await supabase.from("product").delete().eq("id", id);
      if (error) {
        alert("O‘chirishda xatolik: " + error.message);
      } else {
        alert("Mahsulot o‘chirildi!");
        fetchProducts();
      }
    }
    setActiveMenu(null);
  }

  return (
    <div>
      {/* Sarlavha */}
      <div className="d-flex justify-between">
        <div className="d-flex gap-1">
          <a
            href="/admin/dashboard"
            className="text-black text-decoration-none"
          >
            Boshqaruv paneli
          </a>
          <p>/</p>
          <strong>Products</strong>
        </div>
        <button onClick={() => setShowModal(true)} className="btn btn-success">
          + Add
        </button>
      </div>
      {/* Qidiruv */}
      <div className="d-flex justify-between mt-3 mb-2">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Nomi bo'yicha qidirish..."
        />
        <button className="d-flex gap-2 justify-center items-center">
          <FontAwesomeIcon className="w-6" icon={faBars} />
          view
        </button>
      </div>
      {/* Jadval */}
      <div>
        <table className="table w-full caption-bottom">
          <thead>
            <tr>
              <th>№</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Publish</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>

                <td className="max-w-xs truncate" title={product.description}>
                  {product.description}
                </td>

                <td>
                  {categories.find((cat) => cat.id === product.categoryId)
                    ?.name || "Noma'lum"}
                </td>
                <td>{product.price} $</td>
                <td>{product.published ? "Publish" : "draft"}</td>
                <td>
                  <div className="relative">
                    <button onClick={() => toggleMenu(index)}>
                      <Ellipsis className="w-4 h-4 text-gray-500" />
                    </button>
                    {activeMenu === index && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                        <div className="py-1">
                          <button
                            onClick={() => handleEdit(product)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal oynasi */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {editingProduct
                ? "Mahsulotni tahrirlash"
                : "Yangi mahsulot qo'shish"}
            </h2>
            <div className="space-y-4">
              {/* Rasm yuklash */}
              <div>
                <label className="block mb-1"></label>
                {!formData.image ? (
                  <>
                    <label
                      htmlFor="imageUpload"
                      className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition"
                    >
                      <FontAwesomeIcon
                        icon={faCloudArrowUp}
                        className="w-10 h-10 text-gray-400 mb-2"
                      />
                      <p className="text-sm text-gray-600 text-center">
                        <span className="text-blue-600 font-medium">
                          Fayl tanlang
                        </span>{" "}
                        drag drop
                      </p>
                    </label>
                    <input
                      id="imageUpload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </>
                ) : (
                  <div className="relative group w-fit">
                    <img
                      src={URL.createObjectURL(formData.image)}
                      alt="Ko'rish"
                      className="h-24 rounded-md object-cover shadow"
                    />
                    <button
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, image: null }))
                      }
                      className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 rounded-bl-md opacity-0 group-hover:opacity-100 transition"
                    >
                      ✖
                    </button>
                  </div>
                )}
              </div>

              {/* Nomi */}
              <div className="d-flex flex-col">
                <label className="block mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Mahsulot nomi"
                />
              </div>

              {/* Desc */}
              <div className="d-flex flex-col">
                <label className="block mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Mahsulot tavsifi"
                />
              </div>

              {/* Kategoriya */}
              <div className="d-flex flex-col">
                <label className="block mb-1">Category</label>
                <select
                  name="Category"
                  value={formData.Category ?? ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Kategoriyani tanlang</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Narxi */}
              <div className="d-flex flex-col">
                <label className="block mb-1">Prie </label>
                <input
                  type="number"
                  name="Price"
                  value={formData.Price}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Mahsulot narxi"
                />
              </div>

              {/* Holati */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label>Publish</label>
              </div>

              {/* Tugmalar */}
              <div className="flex justify-end space-x-2">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 border rounded"
                >
                  close
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  {editingProduct ? "Save" : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
