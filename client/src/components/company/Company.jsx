import React, { useState } from "react";
import Css from "../users/table.module.css";
import style from "./register.module.css";
import mine from "./assets/mine.svg";
import group from "./assets/group.svg";
import search from "../../assets/search.svg";
import down from "../../assets/down.svg";
import left from "./assets/left.svg";

const Company = () => {
  const [showPasswords, setShowPasswords] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPasswords(!showPasswords);
  };

  // Assuming you have a user object defined somewhere

  return (
    <div className={Css.container}>
      <div className={Css.header}>
        <h1>Компани болон Оффис</h1>
        <div className={Css.option}>
          <div className={Css.option1}>
            <img style={{ width: "20px" }} src={mine} alt="" />
            Миний бүртгэл
          </div>
          <div className={Css.option2}>
            <img style={{ width: "20px" }} src={group} alt="" />
            Бүх бүртгэл{" "}
          </div>
        </div>
      </div>
      <div className={Css.tablebody}>
        <div className={Css.tableheader}>
          <div className={Css.filter}>
            <div className={Css.search}>
              <img style={{ width: "18px" }} src={search} alt="" />
              <input className={Css.input} type="text" placeholder="Хайх..." />
            </div>
            <div className={Css.filters}>
              <p>Бүх Компаниуд </p>
              <img style={{ width: "11px" }} src={down} alt="" />
            </div>
          </div>
          <div className={Css.useradj}>
            <div className={Css.adduser}>Компани бүртгэх</div>
            <div className={Css.adduser}>Оффис бүртгэх</div>
          </div>
        </div>
        <div id={Css.company}>
          <div id={Css.div}>
            <table border="1">
              <thead>
                <tr>
                  <th className={Css.th}>
                    <div className={Css.columnheader}>
                      <span>№</span>
                    </div>
                  </th>
                  <th className={Css.px}>
                    <div className={Css.columnheader}>
                      <span>Компани</span>
                    </div>
                  </th>
                  <th>
                    <div className={Css.columnheader}>
                      <span>Регистрийн дугаар</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className={Css.customtbody}>
                <tr>
                  <td>1</td>
                  <td>Santo service LLC</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Santo service LLC</td>
                  <td>Admin</td>
                </tr>
                {/* Additional rows here */}
              </tbody>
            </table>
          </div>
          <div className={style.company} id={Css.div}>
            <table border="1">
              <thead>
                <tr>
                  <th className={Css.th}>
                    <div className={Css.columnheader}>
                      <span>№</span>
                    </div>
                  </th>
                  <th className={Css.px}>
                    <div className={Css.columnheader}>
                      <span>Компани</span>
                    </div>
                  </th>
                  <th>
                    <div className={Css.columnheader}>
                      <span>Оффис</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className={Css.customtbody}>
                <tr>
                  <td>1</td>
                  <td>Santo service LLC</td>
                  <td>211-1-1020</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Santo service LLC</td>
                  <td>211-1-1020</td>
                </tr>
                {/* Additional rows here */}
              </tbody>
            </table>
          </div>
        </div>
        <div className={Css.tablefooter}>
          <img width={15} src={left} alt="" />
          <p>Хуудас </p>
          <p>1/12</p>
          <img className={Css.gg} width={15} src={left} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Company;
