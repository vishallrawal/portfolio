import React, { useState } from "react";
import BlogReader from "./BlogReader";
import { FiSearch } from "react-icons/fi";

const BlogListContainer = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(posts.map((p) => p.category))];

  // Filter posts based on search input and active category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12">
      {/* Search & Category Filter Section */}
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles by title, description, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-white/10 text-white text-base focus:border-purple-500 focus:outline-none transition-colors shadow-2xl"
          />
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 text-sm font-bold rounded-full transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-purple-600 text-white glow-btn-purple scale-105"
                  : "bg-gray-900/40 border border-white/5 text-gray-400 hover:text-white hover:bg-gray-900/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List & Reader */}
      {filteredPosts.length > 0 ? (
        <BlogListContainerInner posts={filteredPosts} />
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg font-semibold">No articles match your search criteria. Try another keyword!</p>
        </div>
      )}
    </div>
  );
};

// Separating the list to trigger clean state hooks
const BlogListContainerInner = ({ posts }) => {
  return <BlogReader posts={posts} />;
};

export default BlogListContainer;
