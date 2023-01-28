import React from "react";

const Home = () => {
  return (
    <div>
      {/* wrapper */}
      <div className="flex">
        {/* left: image */}
        <div className="flex-1 flex flex-col">
          <img src="/src/assets/images/lips.svg" alt="" />
          <div className="flex items-end text-right pl-28 gap-5">
            <div>
            <p className="text-white text-xl font-bold">Rest assured</p>
            <p className="text-white text-base pt-1">you’ll bust faster than<br/> you think</p>
            </div>
            <img src="/src/assets/images/pinkarrow.svg" alt="" />
          </div>
          {/* <span className="sha"></span> */}
        </div>

        {/* right: text */}
        <div className="pt-52 flex-1 flex flex-col gap-3">
          <p className="text-redPink text-xl font-bold">#FLIP THE TIP</p>
          <p className="text-white text-6xl font-black">
            AMAZING
            <br />
            HEAD
          </p>
          <p className="text-white text-base leading-7 font-normal pt-3">
            Soft, warm, fuzzy, satisfying felling wrapped around
            <br /> your joe and catty. Book a session and have ultimate
            <br /> satisfaction delivered right at your doorstep
          </p>
          <div className="flex items-center gap-9 pt-20">
            <button className="bg-purple rounded-full text-white px-4 py-3">
              Book Now
            </button>
            <div className="flex gap-5">
            <p className="text-white">Explore the satisfaction</p>
            <img src="/src/assets/images/Rectangle.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
