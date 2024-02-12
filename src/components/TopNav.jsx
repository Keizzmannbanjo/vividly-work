import Brand from "./Brand"
import lady from "../images/lady.png"

const TopNav = () => {
  return (
    <div>
      <Brand />

      <div>
        <button>Save</button>
        <button>Add to Download</button>
        <img src={lady} alt="Logged In User"/>
        <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.65088 9L-0.00937541 0.75H17.3111L8.65088 9Z" fill="#2B3595"/>
</svg>

        </div>
    </div>
  )
}

export default TopNav
