import React from "react";
import Footer from "../Footer";

const blogs = [
  {
    id: 1,
    title: "Bahor uchun eng yaxshi gullar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPNhTv4kDRROoihZNpkEvnxcQr0eA0VvPaA&s",
    description:
      "Bahorda uy yoki bog'ingizni bezatish uchun eng chiroyli gullarni tanlang...",
  },
  {
    id: 2,
    title: "Gullarga qanday qilib to'g'ri qarash kerak?",
    image:
      "https://www.arabianflora.com/blog/wp-content/uploads/2022/04/Water-Them-More-Often-1-1024x683.jpeg",
    description:
      "Gullaringiz uzoq yashashi uchun muhim maslahatlar va amaliy usullar...",
  },
  {
    id: 3,
    title: "Sevgan insoningiz uchun gultojlar tanlash",
    image:
      "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt8e32fa55b62eee9a/66275734441dc732a9dda1bb/most-romantic-flowers-rose.jpg?q=70&width=3840&auto=webp",
    description:
      "Maxsus kunlar uchun mukammal gultojlar tanlashda yordam beramiz...",
  },
];

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Blogs</h1>
      <div className="grid md:grid-cols-3 gap-8 md:px-[120px] px-[20px] mb-40">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <button className="text-pink-600 hover:underline font-medium">
                Batafsil o'qish
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blogs;
