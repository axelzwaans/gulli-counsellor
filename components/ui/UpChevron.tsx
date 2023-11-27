import Link from "next/link";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const UpChevron = () => {
  return (
    <div className="flex justify-center py-12">
      <Link href="#top">
        <div className="bg-[#e8beaf] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <HiOutlineChevronDoubleUp className="text-white" size={20} />
        </div>
      </Link>
    </div>
  );
};

export default UpChevron;
