import React from "react";
import Header from "../Komponen/Header";
import Footer from "../Komponen/footer";
import { Outlet } from "react-router-dom";

const Layot = () => {
  return (
    <>
      <Header />
      <div className="h-96 pt-6 pl-8 bg-gray-500">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layot;
