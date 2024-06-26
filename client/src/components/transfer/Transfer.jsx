import React, { useState } from "react";
import Css from "../users/table.module.css";
import mine from "./assets/mine.svg";
import group from "./assets/group.svg";
import Delete from "./assets/delete.svg";
import add from "./assets/add.svg";
import search from "../../assets/search.svg";
import down from "../../assets/down.svg";
import edit from "./assets/edit.svg";
import left from "./assets/left.svg";
import filter from "./assets/filter.svg";

const Transfer = () => {
  const [showPasswords, setShowPasswords] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPasswords(!showPasswords);
  };

  // Assuming you have a user object defined somewhere

  return (
    <div className={Css.container}>
      <div className={Css.header}>
        <h1>Шилжүүлэг</h1>
        <div className={Css.option}>
          <div className={Css.option1}>
            <img style={{ width: "20px" }} src={mine} alt="" />
            Миний Шилжүүлэг
          </div>
          <div className={Css.option2}>
            <img style={{ width: "20px" }} src={group} alt="" />
            Бүх Шилжүүлэг{" "}
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
              <p>Бүх Бараа</p>
              <img style={{ width: "11px" }} src={down} alt="" />
            </div>
          </div>
          <div className={Css.useradj}>
            <p>Шилжүүлэгийн дэлгэрэнгүй</p>
            <div className={Css.adduser}>Шилжүүлэгийг Засах</div>
          </div>
        </div>
        <div className={Css.table}>
          <table border="1">
            <thead>
              <tr>
                <th className={Css.th}>
                  <div className={Css.columnheader}>
                    <span>№</span>
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Компани</span>
                    <img width={15} src={filter} alt="Email" />
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Албан тушаал</span>
                    <img width={15} src={filter} alt="Email" />
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Нэр</span>
                    <img width={15} src={filter} alt="Email" />
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Шилжүүлэгийн огноо</span>
                    <img width={15} src={filter} alt="Email" />
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Тушаалын дугаар</span>
                    <img width={15} src={filter} alt="Email" />
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Тушаалын огноо</span>
                    <img width={15} src={filter} alt="Email" />
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Тушаалын зураг</span>
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Эд хөрөнгийн Зураг</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Santo service LLC</td>
                <td>Admin</td>
                <td>Оюундалай</td>
                <td>Ихзориг</td>
                <td>94442911</td>
                <td>karaylaihzorig@gmail.com</td>
                <td>Зураг харах</td>
                <td>Зураг харах</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Santo service LLC</td>
                <td>Admin</td>
                <td>Оюундалай</td>
                <td>Ихзориг</td>
                <td>94442911</td>
                <td>karaylaihzorig@gmail.com</td>
                <td>Зураг харах</td>
                <td>Зураг харах</td>
              </tr>
              {/* Additional rows here */}
            </tbody>
          </table>
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

export default Transfer;
