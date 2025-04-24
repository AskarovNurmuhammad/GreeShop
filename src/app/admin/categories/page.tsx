"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/app/supbaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Ellipsis } from "lucide-react";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [formData, setFormData] = useState<{
    image: File | null;
    title: string;
    description: string;
    published: boolean;
  }>({
    image: null,
    title: "",
    description: "",
    published: false,
  });
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [editingCategory, setEditingCategory] = useState<any>(null);

  async function fetchCategories() {
    const { data, error } = await supabase.from("category").select("*");
    if (error) {
      console.error("Kategoriya olishda xatolik:", error.message);
    } else {
      setCategories(data || []);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  async function uploadImage(file: File): Promise<string | null> {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `categories/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("categories")
      .upload(filePath, file);

    if (uploadError) {
      console.error("Rasm yuklashda xatolik:", uploadError.message);
      return null;
    }

    const { data } = supabase.storage.from("categories").getPublicUrl(filePath);
    return data.publicUrl;
  }

  async function handleSubmit() {
    try {
      let imageUrl = null;

      if (formData.image) {
        imageUrl = await uploadImage(formData.image);
      }

      if (editingCategory) {
        const { error } = await supabase
          .from("category")
          .update({
            name: formData.title,
            desc: formData.description,
            image_base64: imageUrl || editingCategory.image_base64,
            active: formData.published,
          })
          .eq("id", editingCategory.id);

        if (error) {
          alert("Xatolik yuz berdi: " + error.message);
        } else {
          alert("Kategoriya muvaffaqiyatli yangilandi!");
          fetchCategories();
          closeModal();
        }
      } else {
        const { error } = await supabase.from("category").insert([
          {
            name: formData.title,
            desc: formData.description,
            image_base64: imageUrl,
            active: formData.published,
          },
        ]);

        if (error) {
          alert("Xatolik yuz berdi: " + error.message);
        } else {
          alert("Kategoriya muvaffaqiyatli qo'shildi!");
          fetchCategories();
          closeModal();
        }
      }
    } catch (err: any) {
      alert("Xatolik: " + err.message);
    }
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
    }
  }

  function closeModal() {
    setShowModal(false);
    setEditingCategory(null);
    setFormData({
      image: null,
      title: "",
      description: "",
      published: false,
    });
  }

  function toggleMenu(index: number) {
    setActiveMenu(activeMenu === index ? null : index);
  }

  function handleEdit(category: any) {
    setEditingCategory(category);
    setFormData({
      image: null,
      title: category.name,
      description: category.desc,
      published: category.active,
    });
    setShowModal(true);
    setActiveMenu(null);
  }

  async function handleDelete(id: number) {
    if (confirm("Haqiqatan ham ushbu kategoriyani o'chirmoqchimisiz?")) {
      const { error } = await supabase.from("category").delete().eq("id", id);
      if (error) {
        alert("O'chirishda xatolik: " + error.message);
      } else {
        alert("Kategoriya muvaffaqiyatli o'chirildi!");
        fetchCategories();
      }
    }
    setActiveMenu(null); // Close the menu
  }

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm relative">
      {/* Header */}
      <div className="d-flex justify-between">
        <div className="d-flex gap-1">
          <a
            href="/admin/dashboard"
            className="text-black text-decoration-none"
          >
            Dashboard
          </a>
          <p>/</p>
          <strong> Categories</strong>
        </div>
        <button onClick={() => setShowModal(true)} className="btn btn-success">
          + Add New
        </button>
      </div>

      {/* Search */}
      <div className="d-flex justify-between mt-3 mb-2">
        <input
          type="text"
          className="form-control w-50"
          placeholder="search by title..."
        />
        <button className="d-flex gap-2 justify-center items-center">
          <FontAwesomeIcon className="w-6" icon={faBars} />
          view
        </button>
      </div>

      {/* Table */}
      <div>
        <table className="table w-full caption-bottom">
          <thead>
            <tr>
              <th>№</th>
              <th>Title</th>
              <th>Description</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td className="max-w-xs truncate">{category.desc}</td>
                <td>{category.active ? "Published" : "Unpublished"}</td>
                <td>
                  <div className="relative">
                    <button onClick={() => toggleMenu(index)}>
                      <Ellipsis className="w-4 h-4 text-gray-500" />
                    </button>
                    {activeMenu === index && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                        <div className="py-1">
                          <button
                            onClick={() => handleEdit(category)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(category.id)}
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

      {/* Modalcha*/}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {editingCategory ? "Edit Category" : "Add New Category"}
            </h2>
            <div className="space-y-4">
              <div className="d-flex flex-col">
                <label className="block mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="d-flex flex-col">
                <label className="block mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="d-flex flex-col">
                <label className="block mb-1">Image</label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label>Published</label>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  {editingCategory ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
