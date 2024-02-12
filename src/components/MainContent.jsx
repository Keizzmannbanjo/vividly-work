import { Preview } from "@mui/icons-material";
import ImageCarousel from "./ImageCarousel";
import SideNav from "./SideNav";
import SideToolBar from "./SideToolBar";

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
