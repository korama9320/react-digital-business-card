import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Info from "./components/info";
import About from "./components/about";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="wrap">
      <Info />
      <About />
      <Footer />
    </div>
  );
}
