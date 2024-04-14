const Services = () => {
  return (
    <div id="services" className="w-full h-[900px] bg-[url(/images/Services-background.jpg)] relative bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full absolute top-0 left-0 bg-[#0C1311] bg-opacity-70 px-16">
        <h1
          dir="rtl"
          className="font-cute-font text-secondary text-7xl text-center pt-16 flex flex-col items-center justify-center"
        >
          <p className="border-b-4 border-secondary">My Services</p>
          <p className="text-white text-lg font-poppins py-5">
            I breathe life into stories by seamlessly blending pixels and code
          </p>
        </h1>
        <div className="pt-10 flex flex-col items-center justify-center space-y-5">
          <div className="flex justify-center items-center space-x-5">
            <div className="w-96 h-60 border-2 border-transparent border-primary rounded flex flex-col justify-center items-center bg-[#0C1311] bg-opacity-70">
              <svg
                height="40"
                viewBox="0 0 21 21"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#10D3A4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(2 3)"
                >
                  <line x1="10.5" x2="6.5" y1=".5" y2="14.5" />
                  <polyline
                    points="7.328 2.672 7.328 8.328 1.672 8.328"
                    transform="rotate(135 4.5 5.5)"
                  />
                  <polyline
                    points="15.328 6.672 15.328 12.328 9.672 12.328"
                    transform="scale(1 -1) rotate(-45 -10.435 0)"
                  />
                </g>
              </svg>
              <p className="text-secondary py-3 font-semibold">
                FRONT-END-DEVELOPMENT
              </p>
              <p className="text-xs text-gray-400 font-poppins font-extralight text-center">
                Taking the crafted experiences into the digital realm, <br />{" "}
                Front-end Development brings them to life. I turn <br /> dynamic
                UX/UI designs into responsive layouts.
              </p>
            </div>
            <div className="w-96 h-60 border-2 border-transparent border-primary rounded flex flex-col justify-center items-center bg-[#0C1311] bg-opacity-70">
              <svg
                height="40"
                width="40"
                viewBox="0 0 60 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g
                  fill="#10D3A4"
                  stroke="#10D3A4"
                  data-name="Layer 1"
                  id="Layer_1"
                >
                  <path d="M59.29834.04541a1.00348,1.00348,0,0,0-1.24707.63818c-.75439,2.26416-6.38818,3.57373-12.91162,5.09082-8.46631,1.96826-19.00293,4.418-27.6543,10.36816C12.88849,18.90088-.9314,27.20758,6.73328,42.69684,3.37012,47.14752,0,51.8158,0,59a.99987.99987,0,0,0,1.76807.64014l5-6a.99434.99434,0,0,0,.21582-.46143A48.805,48.805,0,0,1,9.1886,45.03827c.8252.03461,1.65247.0863,2.46326.14825,1.22705.09375,2.46191.188,3.68994.188,4.606-.00049,9.09912-1.32861,12.58691-9.00293C31.54,27.34277,36.95264,24.502,42.68359,21.49463,49.29,18.02734,56.12109,14.44238,59.96,1.27979A.9997.9997,0,0,0,59.29834.04541ZM5.064,52.561,2.2334,55.958a22.69091,22.69091,0,0,1,4.4541-9.8374A51.94828,51.94828,0,0,0,5.064,52.561ZM42.69409,19.22888l-2.24683-1.12341a1.00012,1.00012,0,1,0-.89453,1.78906l.96417.48212a31.97083,31.97083,0,0,0-9.33331,6.78149A12.87811,12.87811,0,0,1,26.04932,28a.98943.98943,0,0,0-1.02637,1,1.0082,1.0082,0,0,0,1.07275,1,20.50679,20.50679,0,0,0,3.03186-.20117,29.86818,29.86818,0,0,0-2.884,5.43091C23.64777,36.90717,21.94672,37,19,37a1,1,0,0,0,0,2,15.55133,15.55133,0,0,0,5.65057-.72638c-3.57208,5.6217-7.91125,5.29578-12.84637,4.91876-.60541-.04608-1.22278-.08856-1.84369-.12457C15.78137,29.28448,28.22833,19.2536,48.3418,11.93994a1.00016,1.00016,0,0,0-.68359-1.87988c-17.80566,6.4751-29.78516,15.062-36.62012,26.44629a1.05026,1.05026,0,0,0-.05908.0918,43.16253,43.16253,0,0,1-2.88727,4.2951C6.10223,36.4007,6.13568,32.62018,7.233,29.47748a10.87328,10.87328,0,0,0,.86078,2.94537,1,1,0,1,0,1.8125-.8457,12.86572,12.86572,0,0,1-.9165-5.56653,25.05725,25.05725,0,0,1,6.838-6.467A11.00519,11.00519,0,0,0,14,25a1,1,0,0,0,2,0c0-.79663.33624-3.751,4.577-8.46478a61.86926,61.86926,0,0,1,14.62073-6.16693l-.09222.18445a1.00012,1.00012,0,0,0,1.78906.89453l.90607-1.81219c2.70551-.72766,5.33826-1.34235,7.79169-1.9129C50.2998,6.62793,54.20752,5.71924,56.78516,4.4165,53.30151,13.26288,48.16394,16.3374,42.69409,19.22888Z" />
                </g>
              </svg>
              <p className="text-secondary py-3 font-semibold">UX DESIGN</p>
              <p className="text-xs text-gray-400 font-poppins font-extralight text-center">
                User research is my passion— I love delving into how <br />{" "}
                people operate, what irks and excites them. As an <br /> empathy
                nerd, Understanding users requirements and <br /> creating a
                seamless experience is my forte.
              </p>
            </div>
            <div className="w-96 h-60 border-2 border-transparent border-primary rounded flex flex-col justify-center items-center bg-[#0C1311] bg-opacity-70">
              <svg
                height="40"
                width="40"
                fill="#10D3A4"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g
                  stroke="#10D3A4"
                  data-name="72-Vector Graphic"
                  id="_72-Vector_Graphic"
                >
                  <path
                    d="M18,13H14a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V14A1,1,0,0,0,18,13Zm-1,4H15V15h2Z"
                    stroke="#10D3A4"
                  />
                  <path
                    d="M31,6a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H27a1,1,0,0,0-1,1V2H19V1a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1V2H6V1A1,1,0,0,0,5,0H1A1,1,0,0,0,0,1V5A1,1,0,0,0,1,6H2v7H1a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H2v7H1a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H5a1,1,0,0,0,1-1V30h7v1a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V30h7v1a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V27a1,1,0,0,0-1-1H30V19h1a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H30V6ZM15,2h2V4H15ZM2,2H4V4H2ZM2,15H4v2H2ZM4,30H2V28H4Zm13,0H15V28h2Zm9-3v1H19V27a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v1H6V27a1,1,0,0,0-1-1H4V19H5a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H4V6H5A1,1,0,0,0,6,5V4h7V5a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V4h7V5a1,1,0,0,0,1,1h1v7H27a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h1v7H27A1,1,0,0,0,26,27Zm4,3H28V28h2Zm0-13H28V15h2ZM28,4V2h2V4Z"
                    stroke="#10D3A4"
                  />
                </g>
              </svg>
              <p className="text-secondary py-3 font-semibold">UI DESIGN</p>
              <p className="text-xs text-gray-400 font-poppins font-extralight text-center">
                I bring designs to life that are both stylish and user- <br />{" "}
                friendly. My goal is to make interfaces not just visually <br />{" "}
                appealing but also a delight to use. I create designs <br />{" "}
                that are intuitive, accessible, and easy to navigate.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <div className="w-96 h-60 border-2 border-transparent border-primary rounded flex flex-col justify-center items-center bg-[#0C1311] bg-opacity-70">
              <svg
                width="40"
                height="40"
                viewBox="0 0 38 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_170_138)">
                  <path
                    d="M8.23047 30.1924V14.8077"
                    stroke="#10D3A4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.846 13.2693H26.6922C24.9928 13.2693 23.6152 14.6469 23.6152 16.3462V22.5001C23.6152 24.1994 24.9928 25.577 26.6922 25.577H32.846C34.5454 25.577 35.9229 24.1994 35.9229 22.5001V16.3462C35.9229 14.6469 34.5454 13.2693 32.846 13.2693Z"
                    stroke="#10D3A4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.3079 2.5H5.15407C3.45475 2.5 2.07715 3.87758 2.07715 5.57692V11.7308C2.07715 13.4301 3.45475 14.8077 5.15407 14.8077H11.3079C13.0072 14.8077 14.3848 13.4301 14.3848 11.7308V5.57692C14.3848 3.87758 13.0072 2.5 11.3079 2.5Z"
                    stroke="#10D3A4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.3079 30.1923H5.15407C3.45475 30.1923 2.07715 31.5699 2.07715 33.2692V39.423C2.07715 41.1224 3.45475 42.5 5.15407 42.5H11.3079C13.0072 42.5 14.3848 41.1224 14.3848 39.423V33.2692C14.3848 31.5699 13.0072 30.1923 11.3079 30.1923Z"
                    stroke="#10D3A4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.6151 19.423H17.4612C15.0131 19.423 12.6652 20.3955 10.9341 22.1266C9.20299 23.8577 8.23047 26.2056 8.23047 28.6537"
                    stroke="#10D3A4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_170_138"
                    x="0.0771484"
                    y="0.5"
                    width="37.8457"
                    height="44"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.827451 0 0 0 0 0.643137 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_170_138"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_170_138"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <p className="text-secondary py-3 font-semibold">
                PROTOTYPING AND TESTING
              </p>
              <p className="text-xs text-gray-400 font-poppins font-extralight text-center">
                Do not build it blind! I turn ideas into interactive <br />{" "}
                prototypes, letting you see and feel your design before <br />{" "}
                it is set in stone. Through rigorous testing, I ensure that{" "}
                <br /> the final product is intuitive and user-friendly.
              </p>
            </div>
            <div className="w-96 h-60 border-2 border-transparent border-primary rounded flex flex-col justify-center items-center bg-[#0C1311] bg-opacity-70">
              <svg
                height="40"
                width="40"
                viewBox="0 0 88 88"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g stroke="#10D3A4" fill="#10D3A4" id="Pentool">
                  <path
                    d="M79,36H76.9766a32.8015,32.8015,0,0,0-21.6-30H72.142a4,4,0,1,0,0-2H48V2a1,1,0,0,0-1-1H41a1,1,0,0,0-1,1V4H15.858a4,4,0,1,0,0,2H32.6232a32.8015,32.8015,0,0,0-21.6,30H9a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V37a1,1,0,0,0-1-1H13.0234A30.815,30.815,0,0,1,40,6.2631V8a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V6.2631A30.815,30.815,0,0,1,74.9766,36H73a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V37A1,1,0,0,0,79,36Z"
                    stroke="#10D3A4"
                  />
                  <path
                    d="M46.8945,13.5527A1,1,0,0,0,45,14V46.41a1,1,0,0,0,.5947.914,4,4,0,1,1-3.1894,0A1,1,0,0,0,43,46.41V14a1,1,0,0,0-1.8945-.4473l-19,38a1.0008,1.0008,0,0,0,0,.8946L29.3818,67H58.6182l7.2763-14.5527a1.0008,1.0008,0,0,0,0-.8946Z"
                    stroke="#10D3A4"
                  />
                  <rect
                    height="8"
                    rx="1"
                    ry="1"
                    width="36"
                    x="26"
                    y="69"
                    stroke="#10D3A4"
                  />
                  <path
                    d="M29,86a1,1,0,0,0,1,1H58a1,1,0,0,0,1-1V79H29Z"
                    stroke="#10D3A4"
                  />
                </g>
              </svg>
              <p className="text-secondary py-3 font-semibold">
                GRAPHIC DESIGN
              </p>
              <p className="text-xs text-gray-400 font-poppins font-extralight text-center">
                Graphic Design? I do that too! Branding, website <br /> visuals,
                you name it. I create a cohesive and impactful <br /> look that
                complements your brand and resonate
                <br /> with your audience.
              </p>
            </div>
            <div className="w-96 h-60 border-2 border-transparent border-primary rounded flex flex-col justify-center items-center bg-[#0C1311] bg-opacity-70">
              <svg
                width="40"
                height="40"
                viewBox="0 0 30 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_177_233)">
                  <path
                    d="M7.02539 21.4998H9.97831L12.895 16.7379L16.645 26.4998L19.4615 21.4998H22.9732"
                    stroke="#10D3A4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.9997 34.3571C22.1005 34.3571 27.8569 28.6008 27.8569 21.5C27.8569 14.3992 22.1005 8.64282 14.9997 8.64282C7.89892 8.64282 2.14258 14.3992 2.14258 21.5C2.14258 28.6008 7.89892 34.3571 14.9997 34.3571Z"
                    stroke="#10D3A4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.1422 10.7857V5.78573C22.1422 5.02796 21.8411 4.30125 21.3053 3.76543C20.7695 3.22961 20.0428 2.92859 19.285 2.92859H10.7136C9.95582 2.92859 9.2291 3.22961 8.69327 3.76543C8.15747 4.30125 7.85645 5.02796 7.85645 5.78573V10.7857"
                    stroke="#10D3A4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.1422 32.1697V37.2142C22.1422 37.972 21.8411 38.6988 21.3053 39.2345C20.7695 39.7702 20.0428 40.0714 19.285 40.0714H10.7136C9.95582 40.0714 9.2291 39.7702 8.69327 39.2345C8.15747 38.6988 7.85645 37.972 7.85645 37.2142V32.1697"
                    stroke="#10D3A4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_177_233"
                    x="0.142578"
                    y="0.928589"
                    width="29.7139"
                    height="41.1428"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.827451 0 0 0 0 0.643137 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_177_233"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_177_233"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <p className="text-secondary py-3 font-semibold">24/7 SUPPORT</p>
              <p className="text-xs text-gray-400 font-poppins font-extralight text-center">
                I understand that projects and needs sometimes do not operate on
                a 9-to-5 schedule. That is why I offer 24/7 <br /> availability
                for communication and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
