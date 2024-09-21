import React, { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useGSAP(() => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let tl = gsap.timeline();
      let xTransform = gsap.utils.random(-100, 100);
      tl.set(
        image,
        {
          transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
        },
        "start"
      )
        .to(
          image,
          {
            scale: 0,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top 10%",
              end: "bottom 10%",
              scrub: 1,
            },
          },
          "start"
        )
        .to(
          elem,
          {
            xPercent: xTransform,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
          "start"
        );
    });
  });

  return (
    <div className="w-full bg-zinc-900">
      <div className="grid grid-cols-10 grid-rows-9 gap-2 overflow-hidden">
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 5, "--c": 5 }}
        >
          <img src="/image1.jpg" alt="Image 1" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 9, "--c": 8 }}
        >
          <img src="/image2.jpg" alt="Image 2" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="/image3.jpg" alt="Image 3" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 4, "--c": 7 }}
        >
          <img src="/image4.jpg" alt="Image 4" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 4, "--c": 10 }}
        >
          <img src="/image5.jpg" alt="Image 5" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 6, "--c": 2 }}
        >
          <img src="/image6.jpg" alt="Image 6" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 3, "--c": 9 }}
        >
          <img src="/image7.jpg" alt="Image 7" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 8, "--c": 2 }}
        >
          <img src="/image8.jpg" alt="Image 8" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 2, "--c": 4 }}
        >
          <img src="/image9.jpg" alt="Image 9" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 7, "--c": 7 }}
        >
          <img src="/image10.jpg" alt="Image 10" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 10 }}
        >
          <img src="/image11.jpg" alt="Image 11" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 4, "--c": 3 }}
        >
          <img src="/image12.jpg" alt="Image 12" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 6, "--c": 10 }}
        >
          <img src="/image13.jpg" alt="Image 13" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 3, "--c": 1 }}
        >
          <img src="/image14.jpg" alt="Image 14" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 5, "--c": 8 }}
        >
          <img src="/image15.jpg" alt="Image 15" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 2, "--c": 6 }}
        >
          <img src="/image16.jpg" alt="Image 16" width="300" height="500" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 7, "--c": 4 }}
        >
          <img src="/image17.jpg" alt="Image 17" width="300" height="500" />
        </div>
      </div>
      <div
        className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white"
        style={{ fontFamily: "Helvetica Compressed, Arial, sans-serif" }}
      >
        <h1 className="text-6xl uppercase font-bold mb-4">
          StreamCell <sup>®</sup>
        </h1>
        <h2 className="text-4xl">素晴らしいショートフィルム作品</h2>
      </div>
      <div className="h-screen w-full  px-8 py-96 bg-[#d1d1d1] text-left flex flex-col justify-center items-center">
        <p className="text-2xl leading-[2.5rem] text-gray-800 w-3/4 font-medium">
          Welcome to StreamCell®, your ultimate destination for discovering
          top-rated movies. Our website directory curates an extensive
          collection of critically acclaimed films across various genres.
          Whether you're a cinephile or just looking for your next movie night
          pick, StreamCell® offers a user-friendly platform to explore, rate,
          and find detailed information about the best movies from around the
          world.
        </p>
      </div>
    </div>
  );
};

export default App;
