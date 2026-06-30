import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function EmailCopy() {
  const [copied, setCopied] = useState(false);
  const email = "vishalrawal448@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="flex items-center gap-4 bg-gray-900/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/5 shadow-2xl">
      <span className="text-gray-300 font-semibold text-sm sm:text-base selection:bg-purple-500/30">{email}</span>
      <button
        onClick={copyToClipboard}
        className={`flex items-center gap-2 cursor-pointer font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 ${
          copied 
            ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/20" 
            : "bg-purple-600 hover:bg-purple-500 text-white glow-btn-purple"
        }`}
      >
        {copied ? (
          <>
            <FiCheck size={14} />
            <span>Copied</span>
          </>
        ) : (
          <>
            <FiCopy size={14} />
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  );
}
