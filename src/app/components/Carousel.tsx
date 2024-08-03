"use client";

import Image from "next/image";

const slides = [
  { id: "slide1", src: "/assets/no-picture.jpg", type: "image" },
  { id: "slide2", src: "/assets/no-picture.jpg", type: "image" },
  { id: "slide3", src: "/assets/no-picture.jpg", type: "image" },
  { id: "slide4", src: "/videos/video1.mp4", type: "video" },
];

const Carousel: React.FC = () => {
  const handleNavigation = (event: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
  };

  return (
    <div className="carousel w-full">
      {slides.map((slide, index) => (
        <div key={slide.id} id={slide.id} className="carousel-item relative w-full">
          {slide.type === "image" ? (
            <Image src={slide.src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" className="w-full h-full" />
          ) : (
            <video className="w-full" width="320" height="240" controls>
              <source src={slide.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={event => handleNavigation(event, slides[(index - 1 + slides.length) % slides.length].id)} type="button" className="btn btn-circle">
              ❮
            </button>
            <button onClick={event => handleNavigation(event, slides[(index + 1) % slides.length].id)} type="button" className="btn btn-circle">
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
