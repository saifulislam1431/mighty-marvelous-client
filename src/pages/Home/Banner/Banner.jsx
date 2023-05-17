import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.jpg";
import banner3 from "../../../assets/banner/banner3.jpg";
import banner4 from "../../../assets/banner/banner4.jpg";
import banner5 from "../../../assets/banner/banner5.jpg";

const Banner = () => {
    return (
        <section className='my-14'>
<div className="px-5 lg:px-20">
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="relative">
            <div>
                <img src={banner1} alt="Banner Image" className="w-full h-96 lg:h-[500px] rounded-lg lg:rounded-2xl"/>
            </div>
            <div className="absolute text-white top-0 w-full h-full bg-black rounded-lg lg:rounded-2xl bg-opacity-60">
<div className="flex w-full h-full items-center justify-center">
<div>
    <h1 className="text-xl lg:text-5xl brand-title text-primary px-14 text-center">Discover the Power of Superhero Toys!</h1>
    <p className="text-center px-10 mt-5 lg:px-20">Experience the power and magic of superhero toys as they bring your favorite characters to life. Explore a realm filled with incredible action, awe-inspiring details, and endless possibilities for heroic play.</p>
</div>
</div>
            </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="relative">
            <div>
                <img src={banner2} alt="Banner Image" className="w-full h-96 lg:h-[500px] rounded-lg lg:rounded-2xl"/>
            </div>
            <div className="absolute text-white top-0 w-full h-full bg-black rounded-lg lg:rounded-2xl bg-opacity-60">
<div className="flex w-full h-full items-center justify-center">
<div>
    <h1 className="text-xl lg:text-5xl brand-title text-primary px-14 text-center">Unleash Your Inner Hero!</h1>
    <p className="text-center px-10 mt-5 lg:px-20">Discover a world of superhero toys that will ignite your imagination and unleash your inner hero. From action-packed figures to collectible treasures, dive into a universe where bravery and adventure know no bounds.</p>
</div>
</div>
            </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="relative">
            <div>
                <img src={banner3} alt="Banner Image" className="w-full h-96 lg:h-[500px] rounded-lg lg:rounded-2xl"/>
            </div>
            <div className="absolute text-white top-0 w-full h-full bg-black rounded-lg lg:rounded-2xl bg-opacity-60">
<div className="flex w-full h-full items-center justify-center">
<div>
    <h1 className="text-xl lg:text-5xl brand-title text-primary px-14 text-center">Embrace the Marvels of Superhero Collectibles!</h1>
    <p className="text-center px-10 mt-5 lg:px-20">Embrace the marvels of superhero collectibles that will dazzle collectors and fans alike. Delve into a realm of meticulously crafted figures and statues, celebrating the timeless heroes that inspire us all.</p>
</div>
</div>
            </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="relative">
            <div>
                <img src={banner4} alt="Banner Image" className="w-full h-96 lg:h-[500px] rounded-lg lg:rounded-2xl"/>
            </div>
            <div className="absolute text-white top-0 w-full h-full bg-black rounded-lg lg:rounded-2xl bg-opacity-60">
<div className="flex w-full h-full items-center justify-center">
<div>
    <h1 className="text-xl lg:text-5xl brand-title text-primary px-14 text-center">Enter a World of Superhero Toy Awesomeness!</h1>
    <p className="text-center px-10 mt-5 lg:px-20">Uncover epic adventures waiting to be discovered with our extraordinary selection of superhero toys. Join forces with legendary characters, ignite your imagination, and embark on thrilling quests that will leave you breathless.</p>
</div>
</div>
            </div>
            </div></SwiperSlide>
        <SwiperSlide><div className="relative">
            <div>
                <img src={banner5} alt="Banner Image" className="w-full h-96 lg:h-[500px] rounded-lg lg:rounded-2xl"/>
            </div>
            <div className="absolute text-white top-0 w-full h-full bg-black rounded-lg lg:rounded-2xl bg-opacity-80">
<div className="flex w-full h-full items-center justify-center">
<div>
    <h1 className="text-xl lg:text-5xl brand-title text-primary px-14 text-center">Uncover Epic Adventures with Superhero Toys!</h1>
    <p className="text-center px-10 mt-5 lg:px-20">Step into a world where superhero toy awesomeness reigns supreme. Immerse yourself in a captivating realm where iconic heroes and villains come to life, filling your world with excitement, joy, and endless possibilities.</p>
</div>
</div>
            </div>
            </div></SwiperSlide>
      </Swiper>
</div>
        </section>
    );
};

export default Banner;