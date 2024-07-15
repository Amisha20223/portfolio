import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] ml-[6px]"
              >
                YouTube
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <a
                href="https://github.com/Amisha20223"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] ml-[6px]"
              >
                GitHub
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <a
                href="https://discord.com/channels/@me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] ml-[6px]"
              >
                Discord
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <a
                href="https://www.instagram.com/maheaa_07/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] ml-[6px]"
              >
                Instagram
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <a
                href="https://x.com/maheaa_07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] ml-[6px]"
              >
                Twitter
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <a
                href="https://www.linkedin.com/in/amisha-singh-69a790230/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] ml-[6px]"
              >
                LinkedIn
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://github.com/Amisha20223"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] ml-[6px]"
              >
                Become Sponsor
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://github.com/Amisha20223"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] ml-[6px]"
              >
                Learning about me
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="mailto:maheaa077@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] ml-[6px]"
              >
                maheaa077@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">&copy; Your Company Name</div>
      </div>
    </div>
  );
};

export default Footer;
