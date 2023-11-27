import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/DMSerifDisplay-Regular.ttf",
});

const WorkWithMe = () => {
  return (
    <div
      className="w-full md:h-screen p-2 flex items-center py-8"
      id="workwithme"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#9bab9e]">
            Work
          </p>
          <h2 className={cn(headingFont.className, "text-5xl mb-4")}>
            With Me.
          </h2>
          <p className="py-2 text-gray-600">
            Hello I'm Gulli, I wish you a warm welcome. Perhaps you are
            grappling with a situation or behaviour that feels out of your
            control, or struggling with anxiety, depression, addiction or past
            trauma; perhaps you have lost your spark for life, and feel a deep
            inner home-sickness for more meaning and a sense of purpose.
            Whatever your unique story, seeking help takes immense courage, and
            at least a flicker of hope that you have the inner resources to make
            it through. I believe that you do.
          </p>
          <p className="py-2 text-gray-600">
            Counselling can be a transformative journey, but it can be hard to
            find space for ourselves. I invite you to take this time for you.
            Our work together will be tailored to you and the relationship we
            build. I will act as a guide - drawing on traditional talking
            therapies whilst weaving in creativity, imagery and somatic
            experiencing when words are not enough.
          </p>
          <p className="py-2 text-gray-600">
            I commit to offering a compassionate, safe, and confidential place
            to bring whatever you need support in working through. I welcome you
            to make contact, and we can arrange a free call or zoom to discuss
            what working together looks like.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/images/egg-diagram.jpeg"
            alt="Picture of Gulli Skatun"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkWithMe;
