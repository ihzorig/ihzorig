import React from "react";
import Css from "./sidebar.module.css";
import Logo from "./assets/apple-svgrepo-com.svg";
import dashboard from "./assets/dashboard.svg";
import product from "./assets/product.svg";
import userslogo from "./assets/users.svg";
import company from "./assets/company.svg";
import transfer from "./assets/trans.svg";
import Del from "./assets/delete.svg";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <div className={Css.sidebar}>
        <div className={Css.pro}>
          <img src={Logo} className={Css.logo} alt="" />
          <p>
            <span
              style={{
                color: "rgb(253, 104, 104)",
                fontSize: "24px",
                fontWeight: "bolder",
              }}
            >
              Santo
            </span>{" "}
            service LLC
          </p>
        </div>
        <div className={Css.menu}>
          <ul>
            <Link className={Css.link} to="/login">
              <li>
                <img className={Css.icon} src={dashboard} alt="" />
                Хянах самбар
              </li>
            </Link>
            <li>
              <img className={Css.icon} src={company} alt="" />
              Компани
            </li>
            <li>
              <img className={Css.icon} src={userslogo} alt="" />
              Хэрэглэгчийн бүртгэл
            </li>
            <li>
              <img className={Css.icon} src={product} alt="" />
              Бараа бүтээгдэхүүн бүртгэл
            </li>
            <li>
              <img className={Css.icon} src={transfer} alt="" />
              Шилжүүлэг
            </li>
            <li>
              <img className={Css.icon} src={Del} alt="" />
              Акт{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;