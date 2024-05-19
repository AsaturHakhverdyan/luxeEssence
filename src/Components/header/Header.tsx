import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS, PAGES } from "../../utils/constants/constants";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { CiLogout, CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import photo from "./components/images/photo.jpg"

const Header = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<string>("");
  const basket = useSelector((state: RootState) => state.basket);
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_TOKEN)
  const [sayAboutLogin, toggleSayAboutLogin] = useState<boolean>(false);

  useEffect(() => {
    const user = localStorage.getItem(LOCAL_STORAGE_KEYS.USERNAME);
    if (user && typeof user === "string") {
      const userName = JSON.parse(user);
      setUserInfo(userName);
    }
  }, []);

  const logOut = async () => {
    localStorage.clear()
    setUserInfo("");
    navigate(PAGES.HOME);
  };

  const showErrorMessage = () => {
    if (token) {
      return;
    }
    toggleSayAboutLogin(true);
    setTimeout(() => {
      toggleSayAboutLogin(false)
    }, 1000)
  }

  return (
    <div className="py-[20px]  px-2 mb-[30px] border-b-2">
      <div className="block md:flex justify-between items-center relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            {token ?
              <button
                className="text-[13px] mr-2 px-[10px] py-[2px] bg-[#F1EFE8] border border-[#F1EFE8] text-[#384275] rounded-xl"
                onClick={logOut}
              >
                <CiLogout size={24} />
              </button>
              :
              <button
                className="text-[13px] mr-2 px-[10px] py-[2px] bg-[#F1EFE8] border border-[#F1EFE8] text-[#384275] rounded-xl"
                onClick={() => navigate("/login")}
              >
                <CiUser size={24} />
              </button>
            }
            <div className="hidden md:flex">
              {userInfo ? <h1 className="text-[15px] text-[#384275] underline bg-[#F1EFE8] p-[2px_10px] rounded-xl">
                {userInfo}
              </h1> : null}
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-around">
          <div className="h-[50px]">
            <Link to={PAGES.HOME}>
              <img src={photo} alt="logo" className="w-full h-full object-cover" />
            </Link>
          </div>
          <div>
            <Link to={PAGES.HOME} className="text-[20px] font-[700] hover:text-[#2b355d]">
              Գլխավոր Էջ
            </Link>
          </div>
          <div>
            <a href="#footer" className="text-[20px] font-[700] hover:text-[#2b355d]">
              Կամ Մեզ Հետ
            </a>
          </div>
          <div>
            <Link to={PAGES.ABOUTUS} className="text-[20px] font-[700] hover:text-[#2b355d]">
              Մեր մասին
            </Link>
          </div>
        </div>
        <div className="block md:flex items-center">
          <div className="flex items-center relative">
            {sayAboutLogin ? (
              <div className="bg-red-200 py-1 px-4 rounded-lg duration-150 w-[280px] flex items-center justify-center absolute top-[4px] right-[50px]">
                <p className="w-full">{`Խնդրում ենք մուտք գործեք`}</p>
              </div>
            ) : null}
            <div className="flex mx-2" onClick={showErrorMessage}>
              <Link
                to={token ? PAGES.BASKET : PAGES.HOME}
                className="bg-[#F1EFE8] flex items-center justify-center p-2 rounded-xl ml-2 cursor-pointer"
              >
                <div className="relative">
                  <CiHeart size={24} />
                  <p className="absolute top-[-15px] right-[-20px] font-[700] text-[13px]">
                    ({basket && basket.length})
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
