import React from "react";
import Css from "./navbar.module.css";
import cyrcle from "../../assets/cyrcle.svg";
import clock from "../../assets/clock.svg";
import search from "../../assets/search.svg";
import down from "../../assets/down.svg";
import notify from "../../assets/notify.svg";
import settings from "../../assets/settings.svg";
import help from "../../assets/help.svg";
import downname from "../../assets/downname.svg";

const Navbar = () => {
  return (
    <div>
      <div className={Css.navbar}>
        <div className={Css.hailt}>
          <img className={Css.add} src={cyrcle} alt="" />
          <img className={Css.add} src={clock} alt="" />
          <div className={Css.search}>
            <img style={{ width: "18px" }} src={search} alt="" />
            <img className={Css.down} src={down} alt="" />
            <input className={Css.input} type="text" placeholder="Хайх..." />
          </div>
        </div>
        <div className={Css.options}>
          <div style={{ display: "flex", gap: "5px" }}>
            <h2>Ihzorig</h2>
            <img src={downname} style={{ width: "15px" }} alt="" />
          </div>
          <img className={Css.add} src={notify} alt="" />
          <img className={Css.add} src={settings} alt="" />
          <img className={Css.add} src={help} alt="" />
          <div className={Css.profile}>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
