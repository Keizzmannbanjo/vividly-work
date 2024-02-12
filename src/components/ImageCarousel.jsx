import { Splide, SplideSlide } from "@splidejs/react-splide";
import clock from "../images/clock.png";
import "@splidejs/splide/dist/css/splide.min.css";


const ImageCarousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-top-icons">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Splide 
        options={{
          perPage: 1,
          arrows: true,
          pagination: false,
          gap: "5rem",
          drag: "free", 
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide >
          <img src={clock} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={clock} alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default ImageCarousel;
