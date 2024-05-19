import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { ICatchError } from '../../utils/interface';
import axios from 'axios';
import Loader from '../../utils/loader/Loader';
import { useNavigate } from 'react-router-dom';
import { PAGES } from '../../utils/constants/constants';

const SignUp = () => {

  const [username, setUsername] = useState<string>("");
  const [userpassword, setUserpassword] = useState<string>("");
  const [userpassword2, setUserpassword2] = useState<string>("");
  const [showpassword, setShowpassword] = useState<boolean>(false);
  const [showpassword2, setShowpassword2] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<ICatchError>();
  const [samePasswordWrong, setSamePasswordWrong] = useState<string>("");
  const [wrongEmail, setWrongEmail] = useState<string>("");
  const navigate = useNavigate();


  const signUpFormHandler = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.!@#\$%\^&*\(\)])[^\s]{8,}$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    try {
      if (username && !emailRegex.test(username)) {
        setWrongEmail("Սխալ Էլ․ հասցե");
        setTimeout(() => {
          setWrongEmail("")
        }, 1500);
      }
      if (userpassword !== userpassword2) {
        setSamePasswordWrong("Ուղղեք ծածկագիրը");
        setTimeout(() => {
          setSamePasswordWrong("")
        }, 1500);
      }
      if (userpassword && userpassword === userpassword2 && !validPass.test(userpassword)) {
        setSamePasswordWrong("Թույլ ծածկագիր");
        setIsLoading(false);
        setTimeout(() => {
          setSamePasswordWrong("")
        }, 1500);
      }
      if (userpassword !== "" && userpassword === userpassword2 && validPass.test(userpassword)) {
        setIsLoading(true);
        const { data } = await axios.post("https://hydralab-dev.10web.site/wp-json/user-route/register-user",
          {
            username: username,
            password: userpassword,
            email: username
          }
        )
        if (data.cookie) {
          navigate(PAGES.LOGIN);
          setIsLoading(false);
        }
        setIsLoading(false);
      }
    } catch (error: any) {
      console.log(error)
      setIsLoading(false);
      setLoginError(error)
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-around p-3 border mt-5 rounded-md px-4">
      <div className="flex md:block justify-center max-w-3xl w-full">
        <form
          className="flex flex-col max-w-[800px] text-left mt-5 md:w-full"
          onSubmit={(event) => signUpFormHandler(event)}
        >
          <label>
            <span className="text-sky-700 font-[600] text-[14px] xs:text-[16px]">
              Օգտանուն
            </span>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              value={username}
              type="text"
              name="text"
              className="w-full border border-sky-900 mt-2 mb-3 p-2 outline-none rounded-md"
            />
            {wrongEmail ? <p>{wrongEmail}</p> : null}
          </label>
          <label className="relative">
            <span className="text-sky-700 font-[600] text-[14px] xs:text-[16px]">
              Ծածկագիր
            </span>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserpassword(e.target.value)
              }
              value={userpassword}
              type={!showpassword ? "password" : "text"}
              name="password"
              className="w-full border border-sky-900 mt-2 p-2 outline-none rounded-md"
            />
            {!showpassword ? (
              <AiOutlineEye
                className="absolute right-2 top-11 text-teal-900"
                onClick={() => setShowpassword((prev) => !prev)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-11 text-teal-900"
                onClick={() => setShowpassword((prev) => !prev)}
              />
            )}
          </label>
          <label className="relative mt-2">
            <span className="text-sky-700  font-[600] text-[14px] xs:text-[16px]">
              Կրկնել Ծածկագիրը
            </span>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserpassword2(e.target.value)
              }
              value={userpassword2}
              type={!showpassword2 ? "password" : "text"}
              name="password"
              className="w-full border border-sky-900 mt-2 p-2 outline-none rounded-md"
            />
            {samePasswordWrong ? <p className='text-red-800'>{samePasswordWrong}</p> : null}
            {!showpassword2 ? (
              <AiOutlineEye
                className="absolute right-2 top-11 text-teal-900"
                onClick={() => setShowpassword2((prev) => !prev)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-11 text-teal-900"
                onClick={() => setShowpassword2((prev) => !prev)}
              />
            )}
          </label>
          <label className='flex items-center justify-center bg-sky-900 text-sky-100 font-bold text-[18px]  mt-3 rounded-md hover:bg-sky-300 hover:text-sky-900 duration-300 cursor-pointer'>
            {isLoading
              ?
              <div className='py-2'><Loader loading={isLoading} size={24} /></div>
              :
              <input
                type="submit"
                className="uppercase w-full px-4 py-[8px]"
                value={"Գրանցվել"}
              />
            }
          </label>
        </form>
      </div>
    </div>
  )
}

export default SignUp;