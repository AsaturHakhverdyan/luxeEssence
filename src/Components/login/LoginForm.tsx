import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Photo from "../../images/luse.jpg";
import {
  LOCAL_STORAGE_KEYS,
  LOGIN_URL,
  PAGES,
} from "../../utils/constants/constants";
import { ICatchError } from "../../utils/interface";
import axios from "axios";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [userpassword, setUserpassword] = useState<string>("");
  const [showpassword, setShowpassword] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<ICatchError>();

  const formHandler = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    console.log("first")
    event.preventDefault();
    try {
      const result = await axios.post(`https://hydralab-dev.10web.site/wp-json/user-route/generate_auth_cookie/?email=${username}&password=${userpassword}`);
      if (result) {
        localStorage.setItem(
          LOCAL_STORAGE_KEYS.JWT_TOKEN,
          JSON.stringify(result.data.cookie)
        );
        localStorage.setItem(
          LOCAL_STORAGE_KEYS.USERNAME,
          JSON.stringify(result.data.user.display_name
          )
        );
        navigate(PAGES.HOME);
      }
    } catch (error: any) {
      setLoginError(error);
    }
    setUsername("");
    setUserpassword("");
  };
  const changeIcon = () => {
    setShowpassword(!showpassword);
  };

  return (
    <div className="block text-center md:flex items-center justify-around p-3 border mt-5 rounded-md px-4">
      <div>
        <img
          src={Photo}
          alt="Photo_Logo"
          className="w-full h-auto md:h-[500px] px-2 object-cover"
        />
      </div>
      <div className="flex md:block justify-center">
        <form
          className="flex flex-col max-w-[500px] text-center md:text-left mt-5 md:w-full"
          onSubmit={formHandler}
        >
          <label>
            <span className="text-sky-700 font-[600] text-[14px] xs:text-[16px]">
              USERNAME
            </span>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              value={username}
              type="text"
              name="text"
              className="w-full border border-sky-900 mt-2 mb-3 p-1 outline-none rounded-md"
            />
          </label>
          <label className="relative">
            <span className="text-sky-700 font-[600] text-[14px] xs:text-[16px]">
              PASSWORD
            </span>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserpassword(e.target.value)
              }
              value={userpassword}
              type={!showpassword ? "password" : "text"}
              name="password"
              className="w-full border border-sky-900 mt-2 p-1 outline-none rounded-md"
            />
            {!showpassword ? (
              <AiOutlineEye
                className="absolute right-2 top-10 text-teal-900"
                onClick={changeIcon}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-10 text-teal-900"
                onClick={changeIcon}
              />
            )}
          </label>
          {/* <p
            onClick={() => navigate(PAGES.UPDATE_PASS)}
            className="text-[15px] font-[600] text-sky-900 mt-1 underline hover:no-underline cursor-pointer"
          >
            Forgot your Password?
          </p> */}
          {loginError ? <p>
            bajanord chi gtnvel
          </p> : null}
          <input
            type="submit"
            className="uppercase bg-sky-900 text-sky-100 font-bold text-[18px] px-4 py-[8px] mt-3 rounded-md hover:bg-sky-300 hover:text-sky-900 duration-300 cursor-pointer"
            value={"login"}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
