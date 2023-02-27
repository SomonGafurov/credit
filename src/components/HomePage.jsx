import React from "react";
import Footer from "./MainHumo/Footer/Footer";
import Header from "./MainHumo/Header/Header";
import MainHumo from "./MainHumo/MainHumo";
import Credits from "./MainHumo/Credits/Credits";
import Deposits from "./MainHumo/Credits/Deposits";
import Cards from "./MainHumo/Cards";
import { Routes, Route } from "react-router-dom";
import Navbar from "./MainHumo/Navbar/Navbar";
import SComponent from "./MainHumo/Slider/SComponent";
import CreditsCalcAgro from "./MainHumo/Credits/CreditsCalcAgro";
import Agri from "./MainHumo/Credits/Agri";
import Bussiness from "./MainHumo/Credits/Bussiness";
import Mortage from "./MainHumo/Credits/Mortage";
import Education from "./MainHumo/Credits/Education";
import PotrCred from "./MainHumo/Credits/PotrCred";
import Onas from "./MainHumo/Navbar/Onas";
import Private from "./MainHumo/Navbar/Private";
import { Legal } from "./MainHumo/Navbar/Legal";
import CreditApplication from "./MainHumo/Credits/CreditApplication";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHumo />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/deposits" element={<Deposits />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/creditcalcagro" element={<CreditsCalcAgro />} />
        <Route path="/agri" element={<Agri />} />
        <Route path="/bussiness" element={<Bussiness />} />
        <Route path="/mortage" element={<Mortage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/potrcred" element={<PotrCred />} />
        <Route path="/Onas" element={<Onas />} />
        <Route path="/Private" element={<Private />} />
        <Route path="/Legal" element={<Legal />} />
        <Route path="/creditapplication" element={<CreditApplication />} />
      </Routes>
      <Footer />
    </div>
  );
}
