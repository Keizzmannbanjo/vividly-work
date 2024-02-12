import clock from "../images/clock.png";

const Preview = () => {
  return (
    <div className="photo-preview">
      <img src={clock} alt="clock Effect 1" className="effect1" />
      <img src={clock} alt="clock Effect 2" className="effect2" />
      <img src={clock} alt="clock Effect 3" className="effect3" />
      <img src={clock} alt="clock Effect 4" className="effect4" />
      <img src={clock} alt="clock Effect 5" className="effect5" />
      <img src={clock} alt="clock Effect 6" className="effect6" />
      <img src={clock} alt="clock Effect 7" className="effect7" />
    </div>
  );
};

export default Preview;
