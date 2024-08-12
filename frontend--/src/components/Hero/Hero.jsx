import React from "react";
import Slider from "react-slick";
import HeroData from "./HeroData";
import Button from "../Shared/Button";
import SliderItem from "./SliderItem";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
//autoplay: true
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      };
    return(
<div className="container">
    <div className="relative overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] bg-gray-800 flex justify-center items-center">
        <div className="relative container pb-8 sm:pb-0">
            <Slider {...settings}>
                {HeroData.map((data) => (
                    <SliderItem key={data.id} data={data} />
                ))}
            </Slider>
        </div>
    </div>
</div>


    )
}
export default Hero;