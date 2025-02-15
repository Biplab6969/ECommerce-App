import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
function HomeSlider() {
  return (
    <div className="homeSlider p-4">
      <div className="container">
        <Swiper
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1739165930/1739165929706_file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg"
              alt="Banner Slide"
              className=" w-full"
            />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1739165904/1739165903970_file_1734525014348_NewProject_7.jpg"
              alt="Banner Slide"
              className=" w-full"
            />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1739165930/1739165929706_file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg"
              alt="Banner Slide"
              className=" w-full"
            />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1739165904/1739165903970_file_1734525014348_NewProject_7.jpg"
              alt="Banner Slide"
              className=" w-full"
            />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeSlider;
