import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="notranslate text-2xl sm:text-4xl font-extrabold tracking-wide font-display text-cyan-400 text-shadow-cyan min-h-[40px]">
      <Typewriter
        options={{
          strings: [
            "Frontend Architect",
            "React & Node Specialist",
            "Angular & Vue Developer",
            "MERN Stack Developer",
            "Creative UI/UX Designer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 40,
          delay: 60,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;