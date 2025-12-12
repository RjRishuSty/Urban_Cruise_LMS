import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sliderData } from "../constants/sliderData";
import Cards from "./Cards";

const SwiperSlider = () => {
  const breakpoints = {
    320: { slidesPerView: 1 },
    600: { slidesPerView: 1 },
    960: { slidesPerView: 1 },
    1280: { slidesPerView: 1 },
  };
  return (
      <Swiper
        className="customSlider"
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSwiper={(swiper) => {
          const el = swiper.el;
          el.addEventListener("mouseenter", () => swiper.autoplay.stop());
          el.addEventListener("mouseleave", () => swiper.autoplay.start());
        }}
        style={{
          width:390,
          "--swiper-pagination-color": "#55552b",
          "--swiper-pagination-bullet-inactive-color": "#cce6ff",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        breakpoints={breakpoints}
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <Cards useIn="slider" data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default SwiperSlider;
