import "./App.css";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";



const App = () => {
  gsap.registerPlugin(useGSAP);// register any plugins, including the useGSAP hook
  useGSAP(() => { 
    gsap.to(".box", {x: 200, rotation: 360, duration: 2})
  })
  return (
    <>
      <div className="box w-30 h-30 bg-red-500"></div>
    </>
  );
};

export default App;
