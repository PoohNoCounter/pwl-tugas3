import React from "react";

const Footer = () => {
  return (
    <footer className="text-sm  border-t-2 py-2 ">
      {" "}
      <p className="text-base text-slate-600 pb-3 ">Contact me via</p>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <a
            href="https://www.instagram.com/andrekembarr/"
            target="_blank"
            className="text-gray-500 hover:text-gray-600 flex gap-2 items-center text-xs"
          >
            Instagram : Andre Riantasa Wijaya
          </a>
          <a
            href="mailto:andreriantasa03@.gmail.com"
            target="_blank"
            className="text-gray-500 hover:text-gray-600 flex gap-2 items-center text-xs"
          >
            e-mail : Andre Riantasa Wijaya
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
