// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import { Fade } from "react-awesome-reveal";

function HeroSection() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <div className="hero-text w-full h-full bg-black absolute top-0">
            <Fade delay={300}>
              <p>Speak a new language, open new doors. Start your journey today!</p>
            </Fade>
            <Fade>
              <h1>Unlock Your World with LanguageExchange</h1>
            </Fade>
          </div>
          <img
            className="object-center h-full w-full"
            src="https://i.ytimg.com/vi/bagHwSSD73o/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLAT24S9Ti_Niut2gZ6QUKD5Dul0ow"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="hero-text w-full h-full bg-black absolute top-0">
            <Fade delay={300}>
              <p>Engaging lessons, real-world conversations. Your fluency starts here.</p>
            </Fade>
            <Fade>
              <h1>Master a New Language, the Fun Way!</h1>
            </Fade>
          </div>
          <img
            className="object-cover h-full w-full"
            src="https://i.ytimg.com/vi/GjdUGAA0Ygo/maxresdefault.jpg"
            alt=""
          />
        </SwiperSlide>
        <div className="autoplay-progress z-30" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default HeroSection;
