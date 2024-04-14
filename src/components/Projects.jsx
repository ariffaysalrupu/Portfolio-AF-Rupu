import corbado from "../../public/projects/corbado.jpg";
import eedu from "../../public/projects/eedu.jpg";
import fb from "../../public/projects/fb.jpg";
import fyx from "../../public/projects/fyx.jpg";
import maya from "../../public/projects/maya.jpg";
import neuro from "../../public/projects/neuro.jpg";
import noma from "../../public/projects/noma.jpg";
import verd from "../../public/projects/verd.jpg";
import case1 from "../../public/projects/case1.jpg";
import case2 from "../../public/projects/case2.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-[900px] relative bg-[#0c1311]">
      <div className="w-full h-full absolute top-0 left-0 bg-[#0C1311] bg-opacity-70 px-16">
        <h1
          dir="rtl"
          className="font-cute-font text-secondary text-7xl text-center pt-16 flex flex-col items-center justify-center"
        >
          <p className="border-b-4 border-secondary">Projects</p>
          <p className="text-white text-lg font-poppins py-5">
            Design with a mission, driving progress through innovation
          </p>
        </h1>
        <div className="pt-10 flex flex-col items-center justify-center space-y-6 px-6">
          <div className="flex justify-center items-center space-x-5">
            <div className="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
              <a
                href="https://www.behance.net/gallery/191352471/Corbado-Redesign"
                target="_blank"
                className="z-10 h-60 w-full overflow-hidden rounded-xl border border-[#676a72] opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70 "
              >
                <img
                  src={corbado}
                  className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110 hover:blur-md"
                  alt=""
                />
              </a>
              <div className="absolute bottom-0 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <p className="font-serif text-lg font-bold text-white shadow-xl  group-hover:block hidden">
                  Corbado
                </p>
              </div>
            </div>
            <div className="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
              <a
                href="https://www.behance.net/gallery/178085525/Landing-Page-Design-of-an-E-Learning-Website-Eedu"
                target="_blank"
                className="z-10 h-60 w-full overflow-hidden rounded-xl border border-[#676a72] opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"
              >
                <img
                  src={eedu}
                  className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110 hover:blur-md"
                  alt=""
                />
              </a>
              <div className="absolute bottom-0 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <p className="font-serif text-lg font-bold text-white shadow-xl  group-hover:block hidden">
                  Eedu
                </p>
              </div>
            </div>
            <div className="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
              <a
                href="https://www.behance.net/gallery/195090737/Facebook-Redesign-Apple-Vision-Pro"
                target="_blank"
                className="z-10 h-60 w-full overflow-hidden rounded-xl border border-[#676a72] opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"
              >
                <img
                  src={fb}
                  className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110 hover:blur-md"
                  alt=""
                />
              </a>
              <div className="absolute bottom-0 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <p className="font-serif text-lg font-bold text-white shadow-xl  group-hover:block hidden">
                  Facebook Redesign
                </p>
              </div>
            </div>
            <div className="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
              <a
                href="https://www.behance.net/gallery/174544587/FYX-MobileTV-App-UXUI-Design"
                target="_blank"
                className="z-10 h-60 w-full overflow-hidden rounded-xl border border-[#676a72] opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"
              >
                <img
                  src={fyx}
                  className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110 hover:blur-md"
                  alt=""
                />
              </a>
              <div className="absolute bottom-0 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <p className="font-serif text-lg font-bold text-white shadow-xl  group-hover:block hidden">
                  Fyx Mobile TV App
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <div className="flex justify-center items-center space-x-5">
              <div className="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                <a
                  href="https://www.behance.net/gallery/194898035/Maya-Language-Learning-App"
                  target="_blank"
                  className="z-10 h-60 w-full overflow-hidden rounded-xl border border-[#676a72] opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"
                >
                  <img
                    src={maya}
                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110 hover:blur-md"
                    alt=""
                  />
                </a>
                <div className="absolute bottom-0 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                  <p className="font-serif text-lg font-bold text-white shadow-xl  group-hover:block hidden">
                    Maya
                  </p>
                </div>
              </div>
              <div className="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                <a
                  href="https://www.behance.net/gallery/193654373/NeuroBlast-Gym-Fitness-Website"
                  target="_blank"
                  className="z-10 h-60 w-full overflow-hidden rounded-xl border border-[#676a72] opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"
                >
                  <img
                    src={neuro}
                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110 hover:blur-md"
                    alt=""
                  />
                </a>
                <div className="absolute bottom-0 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                  <p className="font-serif text-lg font-bold text-white shadow-xl  group-hover:block hidden">
                    Neuroblast
                  </p>
                </div>
              </div>
              <div className="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                <a
                  href="https://www.behance.net/gallery/194474183/Nomadly-Travel-Agency-Website"
                  target="_blank"
                  className="z-10 h-60 w-full overflow-hidden rounded-xl border border-[#676a72] opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"
                >
                  <img
                    src={noma}
                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110 hover:blur-md"
                    alt=""
                  />
                </a>
                <div className="absolute bottom-0 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                  <p className="font-serif text-lg font-bold text-white shadow-xl  group-hover:block hidden">
                    Nomadly
                  </p>
                </div>
              </div>
              <div className="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                <a
                  href="https://www.behance.net/gallery/195243591/Verdant-Landing-Page-Design-of-a-Real-Estate-Website"
                  target="_blank"
                  className="z-10 h-60 w-full overflow-hidden rounded-xl border border-[#676a72] opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"
                >
                  <img
                    src={verd}
                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110 hover:blur-md"
                    alt=""
                  />
                </a>
                <div className="absolute bottom-0 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                  <p className="font-serif text-lg font-bold text-white shadow-xl  group-hover:block hidden">
                    Verdant
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <div className="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
              <a
                href="https://www.behance.net/gallery/171761797/UX-Case-Study-of-a-Bus-Tracking-App"
                target="_blank"
                className="z-10 h-60 w-full overflow-hidden rounded-xl border border-[#676a72] opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70 "
              >
                <img
                  src={case1}
                  className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110 hover:blur-md"
                  alt=""
                />
              </a>
              <div className="absolute bottom-0 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <p className="font-serif text-lg font-bold text-white shadow-xl  group-hover:block hidden">
                  Routzz
                </p>
              </div>
            </div>
            <div className="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
              <a
                href="https://www.behance.net/gallery/171761797/UX-Case-Study-of-a-Bus-Tracking-App"
                target="_blank"
                className="z-10 h-60 w-full overflow-hidden rounded-xl border border-[#676a72] opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70 "
              >
                <img
                  src={case2}
                  className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110 hover:blur-md"
                  alt=""
                />
              </a>
              <div className="absolute bottom-0 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <p className="font-serif text-lg font-bold text-white shadow-xl  group-hover:block hidden">
                  Goggo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
