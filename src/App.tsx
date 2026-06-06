import "./App.css";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";



const App = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => { 
    const tl = gsap.timeline();
    // gsap.to(".box", {x:400, rotation: 360, duration: 5, ease:"elastic.inOut(3, 0.7)"})
    tl.to(".box", { x: 300, rotation: 360, duration: 1, ease: "circ.inOut(0.5)", delay: 2})
    .to(".box", { y: 200, duration: 0.5, delay: 0.5, ease: "power1.inOut" })
    .to(".box", { x: 0, rotation: -360, duration: 1, ease: "circ.inOut(0.5)", delay: 0.5 })
    .to(".box", {x: 300, rotation: 360, duration: 1, ease: "bounce.out", delay: 0.5})
    .to(".box", { y: 400, duration: 1, ease: "elastic.out(1, 2)", delay: 0.5 })
    .to(".box", { x: 0,  rotation: -360, duration: 1, ease: "circ.inOut", delay: 0.5 })
  });
  return (
    <>
      <div className="box w-30 h-30 bg-red-500"></div>
    </>
  );
};

export default App;
