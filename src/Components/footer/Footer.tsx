import React, { useEffect, useState } from "react";
import { BASE_URL, FOOTER_CALL } from "../../utils/constants/constants";
import FooterSkekelton from "../../skeleton/FooterSkekelton";
import { ICatchError, IFooterTexts } from "../../utils/interface";
import axios from "axios";

const Footer = () => {
  const [footerInfo, setFooterInfo] = useState<IFooterTexts>();
  const [footerIsLoading, setFooterIsLoading] = useState<boolean>(false);
  const [footerCatchError, setFooterCatchError] = useState<ICatchError>();
  const date = new Date().getFullYear()

  useEffect(() => {
    (async () => {
      setFooterIsLoading(true);
      try {
        const correctData = await axios.get(`${BASE_URL}/${FOOTER_CALL}`);
        if (correctData) {
          setFooterInfo(correctData.data)
        }
      } catch (error: any | undefined) {
        setFooterCatchError(error);
      } finally {
        setFooterIsLoading(false);
      }
    })();
  }, []);
  return (
    <>
      {footerIsLoading ? (
        <FooterSkekelton />
      ) : (
        <div className="mt-10 p-4 border-t-4 border-[#F1EFE8]">
          <div className="md:flex justify-around flex-wrap text-c">
            <div className="flex items-center text-center mt-2 p-2">
              <img
                src={footerInfo?.contact.address.icon.description}
                alt="#location"
                className="w-5 h-5 mx-2"
              />
              <h1>{footerInfo?.contact.address.text.description}</h1>
            </div>
            <div className="flex items-center mt-2 p-2 text-center border-t-2 md:border-0">
              <img
                src={footerInfo?.contact.phone.icon.description}
                alt="#phone"
                className="w-6 h-6 mx-2"
              />
              <div>
                <p className="hover:underline duration-150">
                  <a href={`tel:`}>
                    {footerInfo?.contact.phone.phone1.description}
                  </a>
                </p>
                <p className="hover:underline duration-150">
                  <a href={`tel:`}>
                    {footerInfo?.contact.phone.phone2.description}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center mt-2 p-2 text-center border-t-2 md:border-0">
              <img
                src={footerInfo?.contact.workhours.icon.description}
                alt="#time"
                className="w-6 h-6 mx-2"
              />
              <div>
                <p>{footerInfo?.contact.workhours.workhours1.description}</p>
                <p>{footerInfo?.contact.workhours.workhours2.description}</p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-center text-[14px] text-gray-500">
              Copyright © {date} Luxe Essense
            </p>
          </div>
        </div>
      )}
      {footerCatchError && <p>{footerCatchError?.data?.message}</p>}
    </>
  );
};

export default Footer;
