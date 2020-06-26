import React from "react";
import logo from "../images/logo.png";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

const CallToAct = () => {
  return (
    <>
      <div className="flex justify-center lg:justify-end my-auto">
        <div className="flex flex-col pt-8 md:pt-0 px-8 md:px-24 lg:px-32 lg:py-24 max-w-2xl">
          <div className="text-xs font-semibold text-white pb-8 pt-6">
            <img
              src={logo}
              alt="donut"
              className="inline h-8 w-8 rounded-full object-cover mr-4"
            />
            Association of Lorem Ipsum
          </div>
          <div className="text-xs text-white uppercase pb-4">Donate Today</div>
          <div className="text-2xl text-white pb-2">Lorem Ipsum Dolor Sit</div>
          <div className="text-md text-white pb-4">
            Donec cursus lorem id lorem faucibus rhoncus.
          </div>
          <div className="text-xs sm:text-2xs text-white leading-5 pb-8 max-w-md">
            Donec cursus lorem id lorem faucibus rhoncus. Vivamus tincidunt,
            libero laoreet volutpat aliquam, lectus mi.
          </div>
          <div className="grid grid-rows-2 grid-cols-2 grid-flow-row gap-4 pb-4 max-w-md h-400">
            <img
              className="rounded-md col-span-1 row-span-1 object-cover w-full"
              src={image1}
              alt="face of building with square windows"
            />
            <img
              className="rounded-md col-span-1 row-span-1 object-cover h-full w-full"
              src={image2}
              alt="looking up at square windows of large skylight"
            />
            <img
              className="rounded-md col-span-2 row-span-1 object-cover h-full w-full"
              src={image3}
              alt="wide view of snowy mountains with 2 hikers in foreground"
            />
          </div>
          <div className="text-3xs text-left text-center text-white pb-6">
            copyright &copy; 2020, Ali. All rights reserved.
            <span className="invisible sm:visible">
              <br />
            </span>
            About | Terms | Privacy
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAct;
