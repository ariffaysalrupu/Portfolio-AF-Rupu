import Behance from "../../public/social-media-icon/Behance.svg";
import facebook from "../../public/social-media-icon/Facebook.svg";
import Instagram from "../../public/social-media-icon/Instagram.svg";
import Linkedin from "../../public/social-media-icon/LinkedIn.svg";

const Footer = () => {
  return (
    <div className="w-full h-[360px] bg-[url(/images/Footer.jpg)] relative bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full absolute top-0 left-0 bg-[#0C1311] bg-opacity-80 flex flex-col justify-center gap-y-10 items-center">
        <div className="flex flex-col gap-y-3 justify-center items-center text-white text-center text-pretty">
          <p className="font-cute-font text-5xl">Rupu</p>
          <p className="text-[#A5A5A5]">
            Passionate about design? So am I!
            <br /> Let&apos;s make something amazing together.
          </p>
          <div className="mt-4 flex gap-x-4">
            <a target="_blank" href="https://www.facebook.com/afrupux">
              <img src={facebook} className="h-8 w-8" alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/afrupu13?igsh=MTFudXlmMzFraDd5NQ=="
            >
              <img src={Instagram} className="h-8 w-8" alt="" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/afrupux/">
              <img src={Linkedin} className="h-8 w-8" alt="" />
            </a>
            <a target="_blank" href="https://www.behance.net/afrupux">
              <img src={Behance} className="h-8 w-8" alt="" />
            </a>
          </div>
        </div>
        <div className="font-poppins text-[#A5A5A5] w-full text-center py-2 text-xs">
          2024 | All rights reserved by AF Rupu | Designed and Developed by AF
          Rupu
        </div>
      </div>
    </div>
  );
};

export default Footer;
