import "./Menu.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Info } from "../../assets/info.svg";

export function Menu() {
  return (
    <div className="menu">
      <div>
        <Logo width="150px" height="10vh" />
      </div>
      <nav className="list">
        <a href=" ">HOME</a>
        <a href=" ">ABOUT US</a>
        <a href=" ">INFO</a>
        <span href=" ">
          <Info className="icon" />
        </span>
      </nav>
    </div>
  );
}
