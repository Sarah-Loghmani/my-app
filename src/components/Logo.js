// import { v4 as uuidv4 } from "uuid";
import Img from "../img/IMG_1155.JPG";

const Logo = ({ data }) => {
  return (
    <div className="container">
      <img className="logoImage" src={Img} alt="Logo" />
      <h3>Sarah Loghmani Studio</h3>
    </div>
  );
};

export default Logo;
