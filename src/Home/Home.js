import { MdOutlineFileDownload } from "react-icons/md";
import Social from "../components/Social";
import Photo from "../components/Photo";

const Home = () => {
  return (
    <section id="home" className="h-full ">
      <div className="container mx-auto h-full xl:p-36">
        <div className="flex flex-col xl:flex-row items-center justify-between pt-20 xl:pt-0 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-m xl:text-xl">
              Software Developer
            </span>
            <h1 className="h2 xl:h1 mb-6">
              Hello I'm <br/> <span className="text-red-600">Zakwan Hamid</span>
            </h1>
            <p className="h3 xl:text-[16px] max-w-[500px] mb-9 text-black/60 px-4 xl:px-0">
              I am a Computer Science graduate with interest in front end development and I am also learning and willing to explore back end technologies as my goal is to be full stack software engineer.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a className="uppercase flex border-2 border-black rounded-full p-2 px-4 gap-2 items-center hover:bg-black hover:text-white hover:transition-all duration-500"
              download
              href="/Resume_Zakwan.pdf">
                <span>Download CV</span>
                <MdOutlineFileDownload  className="text-xl"/>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>

          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Home;
