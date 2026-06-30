import React, { useState, useEffect } from "react";
import { FiX, FiShare2, FiClock, FiCalendar, FiUser } from "react-icons/fi";

const BlogReader = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle URL hash query on mount to allow deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#post-")) {
        const postId = hash.replace("#post-", "");
        const post = posts.find((p) => p.id === postId);
        if (post) {
          setSelectedPost(post);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [posts]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeReader();
      }
    };
    if (selectedPost) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPost]);

  // Track scroll position inside modal reader
  const handleScroll = (e) => {
    const target = e.target;
    const scrollHeight = target.scrollHeight - target.clientHeight;
    if (scrollHeight > 0) {
      const progress = (target.scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    }
  };

  const openReader = (post) => {
    setSelectedPost(post);
    window.history.pushState(null, "", `#post-${post.id}`);
  };

  const closeReader = () => {
    setSelectedPost(null);
    window.history.pushState(null, "", window.location.pathname + window.location.search);
    setScrollProgress(0);
  };

  const handleShare = (post) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#post-${post.id}`;
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("📋 Article link copied to clipboard!");
    }
  };

  return (
    <>
      {/* Blog Cards List */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6">
        {posts.map((post) => (
          <article
            key={post.id}
            onClick={() => openReader(post)}
            className="group glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full hover:border-purple-500/40"
          >
            {/* Decorative Top Accent gradient */}
            <div className="h-1.5 w-full bg-gradient-to-r from-purple-500 via-violet-600 to-cyan-400 group-hover:scale-x-105 transition-transform origin-left duration-300"></div>
            
            <div className="p-6 flex flex-col grow">
              {/* Category tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-2.5 py-1 rounded-lg">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500 font-semibold">{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Footer Meta */}
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-xs text-white">
                    VR
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-300">Vishal Rawal</p>
                    <p className="text-[10px] text-gray-500 font-semibold">{post.publishedAt}</p>
                  </div>
                </div>
                
                <span className="text-xs font-bold text-purple-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Article &rarr;
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Reader Modal Overlay */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-md transition-opacity duration-300">
          {/* Backdrop Dismiss area */}
          <div className="absolute inset-0 cursor-pointer" onClick={closeReader}></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl h-full bg-[#070b14] border-l border-white/10 shadow-2xl flex flex-col z-10 animate-slide-in">
            {/* Reading progress bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-20">
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-violet-600 to-cyan-400 transition-all duration-75"
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>

            {/* Header controls */}
            <div className="glass-panel px-8 py-5 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
                <span>{selectedPost.category}</span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-400">{selectedPost.readTime}</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleShare(selectedPost)}
                  className="p-2 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                  title="Copy link to share"
                >
                  <FiShare2 size={20} />
                </button>
                <button
                  onClick={closeReader}
                  className="p-2 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                  title="Close reader"
                >
                  <FiX size={22} />
                </button>
              </div>
            </div>

            {/* Article Content scroll area */}
            <div
              className="flex-1 overflow-y-auto px-8 py-10 md:py-16 md:px-16"
              onScroll={handleScroll}
            >
              <div className="max-w-2xl mx-auto">
                {/* Meta details */}
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-500 mb-6">
                  <span className="flex items-center gap-1.5"><FiCalendar /> {selectedPost.publishedAt}</span>
                  <span className="flex items-center gap-1.5"><FiUser /> By {selectedPost.author.name}</span>
                  <span className="flex items-center gap-1.5"><FiClock /> {selectedPost.readTime}</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                  {selectedPost.title}
                </h1>

                {/* Divider */}
                <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 mb-8 rounded-full"></div>

                {/* Main Article Body Text */}
                <div className="prose prose-invert prose-purple max-w-none text-gray-300 font-medium text-base md:text-lg leading-relaxed space-y-6">
                  {selectedPost.content.split("\n\n").map((paragraph, index) => {
                    if (paragraph.startsWith("###")) {
                      return (
                        <h3 key={index} className="text-xl md:text-2xl font-bold text-white pt-6 pb-2">
                          {paragraph.replace("###", "").trim()}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith("1.") || paragraph.startsWith("*")) {
                      return (
                        <ul key={index} className="list-disc list-inside space-y-2.5 pl-4 text-gray-300">
                          {paragraph.split("\n").map((li, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {li.replace(/^(\*|(\d+\.))\s*/, "").trim()}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (paragraph.startsWith("`")) {
                      return (
                        <pre key={index} className="bg-slate-900 border border-white/10 rounded-xl p-5 overflow-x-auto text-sm text-cyan-300 font-mono my-4">
                          <code>{paragraph.replace(/`/g, "")}</code>
                        </pre>
                      );
                    }
                    return <p key={index}>{paragraph}</p>;
                  })}
                </div>

                {/* Tags List */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-2.5">
                  {selectedPost.tags.map((tag) => (
                    <span key={tag} className="text-xs font-bold text-purple-400 bg-purple-400/10 px-3 py-1.5 rounded-lg">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Styles for transitions */}
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
};

export default BlogReader;
