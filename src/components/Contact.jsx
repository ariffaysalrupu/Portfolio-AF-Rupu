const Contact = () => {
  return (
    <div id="contact" className="relative w-full h-[600px] bg-[#0c1311]">
      <div className="w-full h-full bg-[#0C1311] bg-opacity-70 px-16">
        <h1 className="font-cute-font text-secondary text-7xl text-center pt-16 flex flex-col items-center justify-center">
          <p>
            Have Questions<span>?</span>
          </p>
          <p className="text-white text-lg font-poppins py-5">
            Never get stuck! With 24/7 support, your journey with me is
            seamless.
          </p>
        </h1>
        <div className="flex items-center justify-center gap-x-4 py-10 px-20">
          <div className="w-7/12 space-y-10">
            <div className="flex gap-x-4 placeholder-[#1c2b27]">
              <input
                className="w-full bg-transparent border border-[#566e67] placeholder-[#566e67] text-white p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Your Name*"
              />
              <input
                className="w-full bg-transparent border border-[#566e67] placeholder-[#566e67] text-white p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone Number*"
              />
            </div>
            <div className="flex gap-x-4">
              <input
                className="w-full bg-transparent border border-[#566e67] placeholder-[#566e67] text-white p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Write The Topic You Want To Discuss*"
              />
            </div>
            <div className="flex gap-x-4">
              <input
                className="w-full bg-transparent border border-[#566e67] placeholder-[#566e67] text-white p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Your Email Address*"
              />
            </div>
          </div>
          <div className="w-5/12 space-y-4">
            <textarea
              placeholder="Message*"
              className="w-full h-[170px] bg-transparent border border-[#566e67] placeholder-[#566e67] text-white p-2 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
            <button className="w-full bg-[#10d3a4] rounded-md py-2">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
