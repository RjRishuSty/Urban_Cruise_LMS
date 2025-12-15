import React, { useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sliderData } from "../constants/sliderData";
import Cards from "./Cards";

const SwiperSlider = () => {
  const breakpoints = useMemo(
    () => ({
      320: { slidesPerView: 1 },
      600: { slidesPerView: 1 },
      960: { slidesPerView: 1 },
      1280: { slidesPerView: 1 },
    }),
    []
  );

  const swiperStyles = useMemo(
    () => ({
      width: 390,
      "--swiper-pagination-color": "#55552b",
      "--swiper-pagination-bullet-inactive-color": "#cce6ff",
      "--swiper-pagination-bullet-inactive-opacity": "1",
      "--swiper-pagination-bullet-size": "10px",
      "--swiper-pagination-bullet-horizontal-gap": "6px",
    }),
    []
  );

  const handleSwiper = useCallback((swiper) => {
    const el = swiper.el;
    const start = () => swiper.autoplay.start();
    const stop = () => swiper.autoplay.stop();

    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", start);

    return () => {
      el.removeEventListener("mouseenter", stop);
      el.removeEventListener("mouseleave", start);
    };
  }, []);

  const slides = useMemo(
    () =>
      sliderData.map((item, index) => (
        <SwiperSlide key={index}>
          <Cards useIn="slider" data={item} />
        </SwiperSlide>
      )),
    []
  );

  return (
    <Swiper
      className="customSlider"
      modules={[Navigation, Autoplay, Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={0}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      onSwiper={handleSwiper}
      style={swiperStyles}
      breakpoints={breakpoints}
    >
      {slides}
    </Swiper>
  );
};

export default React.memo(SwiperSlider);
