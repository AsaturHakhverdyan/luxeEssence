import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime, MdOutlinePhoneInTalk } from "react-icons/md";

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <div className="mt-10 p-4 border-t-4 border-[#F1EFE8]">
      <div className="md:flex justify-around flex-wrap text-c">
        <div className="flex items-center text-center mt-2 p-2">
          <IoLocationOutline size={24} />
          <h1 className="ml-2">Ալեք Մանուկյան 1</h1>
        </div>
        <div className="flex items-center mt-2 p-2 text-center border-t-2 md:border-0">
          <MdOutlinePhoneInTalk size={24} />
          <div className="ml-2">
            <p className="hover:underline duration-150">
              +374 90 90 90 90
            </p>
            <p className="hover:underline duration-150">
              +374 90 90 90 91
            </p>
          </div>
        </div>
        <div className="flex items-center mt-2 p-2 text-center border-t-2 md:border-0">
          <MdAccessTime size={24} />
          <div className="ml-2">
            <p>Երկուշաբթի - Շաբաթ 11:00 - 19:30</p>
            <p>Կիրակի 11:00 - 18:00</p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-center text-[14px] text-gray-500">
          Copyright © {date} Luxe Essense
        </p>
      </div>
    </div>
  )
}
export default Footer;
