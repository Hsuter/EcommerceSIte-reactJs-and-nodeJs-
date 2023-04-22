import React from "react";
import { Instagram, Twitter, Facebook, Email } from "@material-ui/icons";
import CircleIcon from "@mui/icons-material/Circle";

function Footer() {
  return (
    <div className="flex flex-col bg-black text-white flex-wrap   mt-8 pt-8">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-20 items-center justify-around mb-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-row sm:gap-20 gap-2">
            {/*find us*/}
            <div className="flex flex-col gap-8 ">
              <h1 className="underline w-full ">Find us</h1>
              <div className="flex flex-row sm:gap-10 gap-4">
                <div>
                  <Facebook />
                </div>
                <div>
                  <Instagram />
                </div>
                <div>
                  <Twitter />
                </div>
              </div>
              <div className="flex md:flex-row flex-col">
                <Email />
                <a href="mailto:inf0@naxybrands.com">info@naxybrands.com</a>
              </div>
            </div>
            {/*Leave a message*/}
            <div className="flex flex-col lg:hidden visible">
              <div className="flex flex-col gap-4">
                <h1 className="underline">Customer care</h1>
                <div className="flex flex-col gap-2">
                  <p>
                    <CircleIcon className="icons2" />
                    Need help?
                  </p>
                  <p>
                    <CircleIcon className="icons2" />
                    Track order
                  </p>
                  <p>
                    <CircleIcon className="icons2" />
                    FAQ
                  </p>
                  <p>
                    <CircleIcon className="icons2" />
                    Contact us
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100vw] lg:hidden pt-8">
            <p className="bg-white h-[1px] w-[100vw]"></p>
          </div>
        </div>

        {/*Stay Connected*/}
        <div className="flex flex-col mx-2 md:items-start items-center mt-[-40px]  ">
          <h1 className="underline mb-6 text-[30px] font-bold">
            Stay connected
          </h1>

          <p className="mb-2 items-start w-full">
            Subscribe for exclusive updates, new arrivals & insider only
            discounts
          </p>
          <div className="w-full  ">
            <input
              placeholder="Type your email"
              className="bg-black border-2 h-12 p-2 w-80 sm:mr-10 mr-4"
            />
            <button className="bg-white text-black  py-4 px-6 h-full border-2 border-blackdark">
              Subscribe
            </button>
          </div>
        </div>

        {/*Leave a message*/}
        <div className="  flex-col lg:flex hidden">
          <div className="flex flex-col gap-4">
            <h1 className="underline">Customer care</h1>
            <div className="flex flex-col gap-2">
              <p>
                <CircleIcon className="icons2" />
                Need help?
              </p>
              <p>
                <CircleIcon className="icons2" />
                Track order
              </p>
              <p>
                <CircleIcon className="icons2" />
                FAQ
              </p>
              <p>
                <CircleIcon className="icons2" />
                Contact us
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Terms and condition*/}
      <div className="italic md:ml-[37%] ml-[10%] pb-20 ">
        Terms and conditions. Developed by @harrysuter.
      </div>
    </div>
  );
}

export default Footer;
