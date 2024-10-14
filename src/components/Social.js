import React from "react";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Social = () => {
  const socials = [
    { icon: <FaGithub />, path: "https://github.com/zakwanhamid" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/zakwanhamid/" },
    { icon: <FaWhatsapp />, path: "https://www.wasap.my/60147764386" },
  ];

  return (
    <div className="flex gap-3">
      {socials.map((social, index) => {
        return (
          <a
            key={index}
            href={social.path}
            className="w-9 h-9 border border-black rounded-full flex justify-center items-center text-black text-base hover:bg-black hover:text-white hover:transition-all duration-500"
          >
            {social.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
