import React from "react";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/DMSerifDisplay-Regular.ttf",
});

const Contact = () => {
  return (
    <div
      className="flex flex-col w-full md:h-screen p-2 sm:py-12 bg-fixed bg-cover contact-img"
      id="contact"
    >
      <div className="md:w-1/2 m-auto bg-white bg-opacity-80 p-8 rounded-xl">
        <div>
          <p className="text-xl tracking-widest uppercase text-[#9bab9e]">
            Contact
          </p>
          <h2 className={cn(headingFont.className, "text-5xl mb-4")}>
            Get In Touch.
          </h2>
          <form>
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Name</label>
                <input
                  type="text"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Phone Number</label>
                <input
                  type="text"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Email</label>
              <input
                type="email"
                className="border-2 rounded-lg p-3 flex border-gray-300"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Subject</label>
              <input
                type="text"
                className="border-2 rounded-lg p-3 flex border-gray-300"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Message</label>
              <textarea
                className="border-2 rounded-lg p-3 border-gray-300"
                rows={10}
              ></textarea>
            </div>
            <div className="flex flex-col py-2">
              <Button className="text-xl transition-colors duration-300 bg-[#e8beaf] hover:bg-[#c99783]">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
