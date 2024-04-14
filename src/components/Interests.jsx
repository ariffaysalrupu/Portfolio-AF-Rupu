import astro from "../../public/interests-icon/Astronomy.svg";
import cric from "../../public/interests-icon/Cricket.svg";
import history from "../../public/interests-icon/History.svg";
import muscle from "../../public/interests-icon/Muscle.svg";
import phil from "../../public/interests-icon/Philosophy.svg";
import book from "../../public/interests-icon/Reading.svg";
import sci from "../../public/interests-icon/Science.svg";
import sing from "../../public/interests-icon/Singing.svg";
import tech from "../../public/interests-icon/Technology.svg";
import tennis from "../../public/interests-icon/Tennis.svg";
import travel from "../../public/interests-icon/Travel.svg";
import psy from "../../public/interests-icon/psychology.svg";

const Interests = () => {
  return (
    <div className="relative w-full h-[620px] bg-[#0c1311] pt-20">
      <div className="w-full h-full bg-[#0C1311] bg-opacity-70 px-16">
        <h1
          dir="rtl"
          className="font-cute-font text-secondary text-7xl text-center pt-16 flex flex-col items-center justify-center"
        >
          <p className="border-b-4 border-secondary pt-20">Hobbies and Interests</p>
          <p className="text-white text-lg font-poppins py-5">
            Beyond pixels and code, stories that captivate and inspire
          </p>
        </h1>
        <div className="flex flex-col gap-y-7 pt-8">
          <div className="flex justify-center items-center gap-x-7">
            <div className="w-[200px] h-[50px] flex justify-center items-center  text-white space-x-4 shadow-lg border border-[#676a72] bg-[#15201d] rounded-sm">
              <div className="w-3/12">
                <img
                  src={tennis}
                  className="border-r-2 border-[#676a72] pr-2 h-[28px] w-[28px]"
                  alt=""
                />
              </div>
              <p className="w-5/12">Tennis</p>
            </div>
            <div className="w-[200px] h-[50px] flex justify-center items-center  text-white space-x-4 shadow-lg border border-[#676a72] bg-[#15201d] rounded-sm">
              <div className="w-3/12">
                <img
                  src={cric}
                  className="border-r-2 border-[#676a72] pr-2 h-[28px] w-[28px]"
                  alt=""
                />
              </div>
              <p className="w-5/12">Cricket</p>
            </div>
            <div className="w-[200px] h-[50px] flex justify-center items-center  text-white space-x-4 shadow-lg border border-[#676a72] bg-[#15201d] rounded-sm">
              <div className="w-3/12">
                <img
                  src={book}
                  className="border-r-2 border-[#676a72] pr-2 h-[28px] w-[28px]"
                  alt=""
                />
              </div>
              <p className="w-5/12">Reading</p>
            </div>
            <div className="w-[200px] h-[50px] flex justify-center items-center  text-white space-x-4 shadow-lg border border-[#676a72] bg-[#15201d] rounded-sm">
              <div className="w-3/12">
                <img
                  src={muscle}
                  className="border-r-2 border-[#676a72] pr-2 h-[28px] w-[28px]"
                  alt=""
                />
              </div>
              <p className="w-5/12">Workout</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-7">
            <div className="w-[200px] h-[50px] flex justify-center items-center  text-white space-x-4 shadow-lg border border-[#676a72] bg-[#15201d] rounded-sm">
              <div className="w-3/12">
                <img
                  src={travel}
                  className="border-r-2 border-[#676a72] pr-2 h-[28px] w-[28px]"
                  alt=""
                />
              </div>
              <p className="w-5/12">Travelling</p>
            </div>
            <div className="w-[200px] h-[50px] flex justify-center items-center  text-white space-x-4 shadow-lg border border-[#676a72] bg-[#15201d] rounded-sm">
              <div className="w-3/12">
                <img
                  src={sing}
                  className="border-r-2 border-[#676a72] pr-2 h-[28px] w-[28px]"
                  alt=""
                />
              </div>
              <p className="w-5/12">Singing</p>
            </div>
            <div className="w-[200px] h-[50px] flex justify-center items-center  text-white space-x-4 shadow-lg border border-[#676a72] bg-[#15201d] rounded-sm">
              <div className="w-3/12">
                <img
                  src={phil}
                  className="border-r-2 border-[#676a72] pr-2 h-[28px] w-[28px]"
                  alt=""
                />
              </div>
              <p className="w-5/12">Philosophy</p>
            </div>
            <div className="w-[200px] h-[50px] flex justify-center items-center  text-white space-x-4 shadow-lg border border-[#676a72] bg-[#15201d] rounded-sm">
              <div className="w-3/12">
                <img
                  src={astro}
                  className="border-r-2 border-[#676a72] pr-2 h-[28px] w-[28px]"
                  alt=""
                />
              </div>
              <p className="w-5/12">Astronomy</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-7">
            <div className="w-[200px] h-[50px] flex justify-center items-center  text-white space-x-4 shadow-lg border border-[#676a72] bg-[#15201d] rounded-sm">
              <div className="w-3/12">
                <img
                  src={history}
                  className="border-r-2 border-[#676a72] pr-2 h-[28px] w-[28px]"
                  alt=""
                />
              </div>
              <p className="w-5/12">History</p>
            </div>
            <div className="w-[200px] h-[50px] flex justify-center items-center  text-white space-x-4 shadow-lg border border-[#676a72] bg-[#15201d] rounded-sm">
              <div className="w-3/12">
                <img
                  src={tech}
                  className="border-r-2 border-[#676a72] pr-2 h-[28px] w-[28px]"
                  alt=""
                />
              </div>
              <p className="w-5/12">Technology</p>
            </div>
            <div className="w-[200px] h-[50px] flex justify-center items-center  text-white space-x-4 shadow-lg border border-[#676a72] bg-[#15201d] rounded-sm">
              <div className="w-3/12">
                <img
                  src={sci}
                  className="border-r-2 border-[#676a72] pr-2 h-[28px] w-[28px]"
                  alt=""
                />
              </div>
              <p className="w-5/12">Science</p>
            </div>
            <div className="w-[200px] h-[50px] flex justify-center items-center  text-white space-x-4 shadow-lg border border-[#676a72] bg-[#15201d] rounded-sm">
              <div className="w-3/12">
                <img
                  src={psy}
                  className="border-r-2 border-[#676a72] pr-2 h-[28px] w-[28px]"
                  alt=""
                />
              </div>
              <p className="w-5/12">Psychology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
