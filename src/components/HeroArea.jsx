import profileImage from "../../public/images/rupu.jpg";

const HeroArea = () => {
  return (
    <div className="w-full h-screen bg-[url(/images/Herosection.jpg)] relative bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full absolute top-0 left-0 bg-[#0C1311] bg-opacity-70 flex justify-around items-center px-8">
        <div className="w-1/2 text-white flex flex-col justify-center pl-32">
          <p>
            <span className="text-2xl">Hi, I am</span>
            <br />
            <br />
            <span className="font-cute-font text-7xl">Md Arif Faysal Rupu</span>
            <br />
            <span className="font-cute-font text-8xl">
              A Creative <span className="text-secondary">Designer</span>
            </span>{" "}
            <br />
            <span className="text-lg">
              I always believe, when we get the chance to rebuild, we
              shouldn&apos;t
              <br />
              be afraid to start over. We have to Infuse transformation by
              <br />
              shattering boundaries in every pixel of our existence.
            </span>
          </p>
          <div className="flex items-center justify-start space-x-5 py-8">
            <button className="w-48 h-14 border-2 border-white rounded-md bg-secondary text-black border-none">
              <a
                href="https://drive.google.com/file/d/16iDyiBqyDqtNsJvhriqMEtDR_0QqSFyG/view?usp=drive_link"
                target="_blank"
              >
                <i className="fa fa-solid fa-arrow-down mr-2"></i> Download CV
              </a>
            </button>
            <button className="w-48 h-14 border-2 border-white rounded-md bg-transparent">
              <i className="fa fa-solid fa-phone-volume mr-2"></i>Let&apos;s
              Talk
            </button>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={profileImage}
            alt="Rupu-Profile-Img"
            width={"325px"}
            height={"325px"}
            className="rounded-full shadow-2xl border-[16px] border-[#353d3b]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
