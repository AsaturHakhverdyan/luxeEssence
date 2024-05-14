import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS, PAGES } from "../../utils/constants/constants";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { CiLogout, CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<string>("");
  const basket = useSelector((state: RootState) => state.basket);
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_TOKEN)

  useEffect(() => {
    const user = localStorage.getItem(LOCAL_STORAGE_KEYS.USERNAME);
    if (user && typeof user === "string") {
      const userName = JSON.parse(user);
      setUserInfo(userName);
    }
  }, []);

  const logOut = async () => {
    await axios.post("https://payl.10web.cloud/api/users/logout")
    localStorage.clear()
    setUserInfo("");
  }

  console.log(token, userInfo)
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
        <div className="block md:flex items-center">
          <div className="flex items-center">
            <div className="flex mx-2">
              <Link
                to={token ? PAGES.BASKET : PAGES.HOME}
                className="bg-[#F1EFE8] flex items-center justify-center p-2 rounded-xl ml-2 cursor-pointer"
              >
                <div className="relative">
                  <CiHeart size={24} />
                  <p className="absolute top-[-15px] right-[-20px] font-[700] text-[13px]">
                    ({basket.length})
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
