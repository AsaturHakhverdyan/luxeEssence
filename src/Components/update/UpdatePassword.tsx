import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { BsCheck2All, BsEmojiSmile } from "react-icons/bs";
import { isMatchPassword } from "./utils";
import logo from "../../images/logo.jpg";
import { PAGES } from "../../utils/constants/constants";

const UpdatePassword: React.FC = () => {
  const [typechange1, setTypechange1] = useState<boolean>(true);
  const [typechange2, setTypechange2] = useState<boolean>(true);
  const [openErrorDiv, setOpenErrorDiv] = useState<boolean>(true);
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  useEffect(() => {
    if (password1 === password2 && password1 !== " ") {
      setOpenErrorDiv(true);
    }
  }, [password1, password2]);

  const clickHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password1 === password2 && password1 !== " ") {
      setOpenErrorDiv(true);
      setPassword1("");
      setPassword2("");
    }
    if (password1 !== password2) {
      setOpenErrorDiv(false);
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto  flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div>
          <img src={logo} alt="/logo" className="w-40" />
        </div>
        <form
          className={
            openErrorDiv
              ? "w-full p-5 border rounded-2xl shadow-[0_2px_20px]"
              : "w-full p-5 border rounded-2xl shadow-2xl border-red-500"
          }
          onSubmit={clickHandler}
        >
          <h1 className="text-[16px] text-right pb-5 text-sky-900 font-[550] md:text-xl">
            Update Password
          </h1>
          <label className="relative">
            <input
              type={typechange1 ? "password" : "text"}
              value={password1}
              placeholder="New Password"
              name="password1"
              className={
                openErrorDiv
                  ? "w-full outline-none border border-cyan-800 placeholder:text-[14px]"
                  : "w-full outline-none border border-red-500 placeholder:text-[14px]"
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword1(e.target.value)
              }
            />
            {!typechange1 ? (
              <AiOutlineEyeInvisible
                className="absolute top-1 right-2 "
                onClick={() => setTypechange1(!typechange1)}
              />
            ) : (
              <AiOutlineEye
                className="absolute top-1 right-2"
                onClick={() => setTypechange1(!typechange1)}
              />
            )}
          </label>
          <label className="relative">
            <input
              type={typechange2 ? "password" : "text"}
              value={password2}
              placeholder="Confirm Password"
              name="password2"
              className={
                openErrorDiv
                  ? "w-full outline-none border border-cyan-800 my-6 placeholder:text-[14px]"
                  : "w-full outline-none my-6 border border-red-500 placeholder:text-[14px]"
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword2(e.target.value)
              }
            />
            {!typechange2 ? (
              <AiOutlineEyeInvisible
                className="absolute top-1 right-2 "
                onClick={() => setTypechange2(!typechange2)}
              />
            ) : (
              <AiOutlineEye
                className="absolute top-1 right-2 "
                onClick={() => setTypechange2(!typechange2)}
              />
            )}
          </label>
          <div className="block  md:flex justify-between">
            <button
              type="submit"
              className="border px-[20px] py-[5px] rounded-xl bg-[#F1EFE8] text-[#384275] font-[700] mt-3 duration-150 text-[14px] md:text-[16px] w-full md:w-[250px] hover:scale-105 hover:text-cyan-700"
            >
              Update Password
            </button>
            <div
              className={
                isMatchPassword(password1, password2)
                  ? "text-green-700 flex items-center"
                  : "hidden"
              }
            >
              <BsCheck2All size={18} />
              <h1 className="text-[14px] px-[3px] py-2">Greate</h1>
              <BsEmojiSmile size={18} />
            </div>
          </div>
          <div
            className={
              !openErrorDiv ? "text-red-700 text-center pt-3" : "hidden"
            }
          >
            <h1 className="text-xl">*Please enter the correct password*</h1>
          </div>
        </form>
        <h1 className="px-[20px] py-[5px] my-12 text-[#384275] bg-[#F1EFE8] border text-[14px] font-[600]  rounded-xl  shadow-xl shadow-neutral-900 hover:scale-110 duration-300">
          <Link to={PAGES.LOGIN}>Go Back</Link>
        </h1>
      </div>
    </div>
  );
};

export default UpdatePassword;
