import React from "react";
import Slider from "react-slick";
import "./AboutOurMission.css";
import { useMediaQuery } from "react-responsive";

const images = [
  {
    src: "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719392724/Emopract/mobileslider_hfyhac.jpg",
    title: "Our Mission",
    description:
      "We provide the services needed to ensure the very best quality of life for seniors. Our aim is to help elders be active and carefree, reassured by our constant assistance. We promise to offer trustworthy and reliable support and peace of mind for seniors and their family members.",
  },
  {
    src: "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719392724/Emopract/mobileslider_hfyhac.jpg",
    title: "Our Vision",
    description:
      "We provide the services needed to ensure the very best quality of life for seniors. Our aim is to help elders be active and carefree, reassured by our constant assistance. We promise to offer trustworthy and reliable support and peace of mind for seniors and their family members.",
  },
  {
    src: "https://res.cloudinary.com/dshn2s0tc/image/upload/v1719392724/Emopract/mobileslider_hfyhac.jpg",
    title: "Our Values",
    description:
      "We provide the services needed to ensure the very best quality of life for seniors. Our aim is to help elders be active and carefree, reassured by our constant assistance. We promise to offer trustworthy and reliable support and peace of mind for seniors and their family members.",
  },
];

const AboutOurMission = () => {
  const is2XL = useMediaQuery({ minWidth: 1536 });
  const isXl = useMediaQuery({ minWidth: 1366 });
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });

  let slidesToShow = 1;
  let slidesToScroll = 1;

  if (is2XL) {
    slidesToShow = 3;
    slidesToScroll = 4;
  } else if (isXl) {
    slidesToShow = 3;
    slidesToScroll = 3;
  } else if (isLg) {
    slidesToShow = 2;
    slidesToScroll = 2;
  } else if (isMd) {
    slidesToShow = 1;
    slidesToScroll = 1;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    centerMode: true,
    centerPadding: "45px",
    autoplay: false,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentIndex(next),
    arrows: false,
  };

  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <div className="w-full  mx-auto sectionGap">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className=" md:px-[10px] 2xl:px-[10px] rounded-[10px]"
          >
            <div className="relative h-[274px] w-[330px] md:w-full md:h-[400px] xl:h-[550px] 2xl:h-[700px]  ">
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover rounded-[10px]"
              />
              <div
                className={`contentParentMission ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                <h2 className="missionTitle ">{image.title}</h2>
                <p className="missionPara">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AboutOurMission;
