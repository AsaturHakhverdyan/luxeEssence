import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";
import { PAGES } from '../../utils/constants/constants';

const LoginEmailPass = () => {

  const [username, setUsername] = useState<string>("")

  const fromHendler = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="max-w-[1100px] mx-auto flex h-screen justify-center">
      <div className="w-full">
        <div className="flex justify-center">
          <img src={logo} alt="/logo" className="w-36 md:w-52 pt-9" />
        </div>
        <div className="flex justify-between items-center border-b-2 border-b-cyan-800 py-2">
          <h1 className="text-[14px] xs:text-xl md:text-2xl text-sky-800 font-bold">
            RESET PASSWORD
          </h1>
          <p className="underline text-[12px] xs:text-[14px] md:text-[16px] text-sky-800 font-bold hover:text-sky-400 duration-150">
            <Link to={PAGES.LOGIN}>Back to Login</Link>
          </p>
        </div>
        <div className="w-full border p-2 xs:p-6 md:p-12 mt-7">
          <form onSubmit={fromHendler}>
            <p className="pb-4 text-sm text-gray-700">
              Type your Username to reset your password
            </p>
            <p className="pb-4 text-sm text-gray-700">
              Please allow 1 hour for the delivery of the reset e-mail.
            </p>
            <label className="text-sky-900 text-xl font-bold">
              <span className='text-[14px] xs:text-[17px] md:text-[20px]'>E-mail</span>
              <input
                type="email"
                name="email"
                placeholder='Enter your E-mail'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                className="border border-cyan-600 w-full mt-2 text-[16px] font-[500] outline-none hover:border-cyan-200 duration-100"
              />
            </label>
            <button
              type="submit"
              className="border px-[20px] py-[5px] rounded-lg border-cyan-800 text-cyan-800 font-[700] mt-3 duration-150 text-[11px] md:text-[14px] hover:scale-105 hover:text-cyan-700"
            >
              RESET PASSWORD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginEmailPass;
