import ImageCarousel from "./ImageCarousel";
import SideNav from "./SideNav";
import SideToolBar from "./SideToolBar";
import Preview from "./Preview";

const MainContent = () => {
  return (
    <div className="main-container">
      <SideNav />
      <div className="carousel-container">
        <ImageCarousel />
        <Preview />
      </div>
      <SideToolBar />
    </div>
  );
};

export default MainContent;
