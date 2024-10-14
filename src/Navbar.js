import { BiHome } from "react-icons/bi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="fixed bottom-4 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black h-[60px] backdrop-blur-2xl rounded-full max-w-[350px] mx-auto px-5 flex justify-between items-center text-2xl text-white">
          <a
            href="#home"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHome />
          </a>
          <a
            href="#skills"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <FaCode />
          </a>
          <a
            href="#projects"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <CgWebsite />
          </a>
          <a
            href="#contact"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <MdOutlineAttachEmail />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
