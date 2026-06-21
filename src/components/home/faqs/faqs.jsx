import React, { useState } from "react";

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "Technical Skills": [
      "HTML, CSS, JavaScript, Bootstrap, jQuery, AJAX, JSON, React, Astro, Git, and GitHub.",
    ],

    "Web Development": [
      "I build responsive and user-friendly websites using modern web technologies with a focus on performance, accessibility, and clean design.",
    ],

    Education: [
      "Currently pursuing a Bachelor of Computer Applications (BCA) while continuously improving my web development and programming skills through practical projects and self-learning.",
    ],

    Projects: [
      "Developed projects including a Personal Portfolio Website, ShopZone Online Grocery Store, Movie Ticket Booking System, and Online Admission System.",
    ],

    "Future Goals": [
      "Focused on becoming a skilled Full Stack Developer, contributing to open-source projects, and building real-world applications.",
    ],
  };

  return (
    <section className="space-y-4">
      {Object.entries(skills).map(([title, items], index) => (
        <div
          key={index}
          className="rounded-lg border border-gray-700 bg-gray-900"
        >
          <button
            className="w-full p-4 text-left font-bold text-white"
            onClick={() =>
              setOpenItem(openItem === index ? null : index)
            }
          >
            {title}
          </button>

          {openItem === index && (
            <div className="p-4 text-gray-300">
              {items.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default SkillsList;