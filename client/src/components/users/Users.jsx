import React, { useState } from "react";
import Css from "./table.module.css";
import mine from "./assets/mine.svg";
import group from "./assets/group.svg";
import Delete from "./assets/delete.svg";
import add from "./assets/add.svg";
import search from "../../assets/search.svg";
import down from "../../assets/down.svg";
import edit from "./assets/edit.svg";
import left from "./assets/left.svg";
import filter from "./assets/filter.svg";

const Users = () => {
  const [showPasswords, setShowPasswords] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPasswords(!showPasswords);
  };

  // Assuming you have a user object defined somewhere

  return (
    <div className={Css.container}>
      <div className={Css.header}>
        <h1>Хэрэглэгчид</h1>
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
              <p>Бүх Хэрэглэгчид</p>
              <img style={{ width: "11px" }} src={down} alt="" />
            </div>
          </div>
          <div className={Css.useradj}>
            <p>Хэрэглэгчийн дэлгэрэнгүй</p>
            <div className={Css.adduser}>Хэрэглэгч бүртгэх</div>
          </div>
        </div>
        <div className={Css.table}>
          <table border="1">
            <thead>
              <tr>
                <th>
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
                    <span>Овог</span>
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
                    <span>Утас</span>
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Мэйл хаяг</span>
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Эрх олголт</span>
                    <img width={15} src={filter} alt="Email" />
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Нэвтрэх нэр</span>
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Үйлдэл</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className={Css.customtbody}>
              <tr>
                <td>1</td>
                <td>Santo service LLC</td>
                <td>Admin</td>
                <td>Оюундалай</td>
                <td>Ихзориг</td>
                <td>94442911</td>
                <td>karaylaihzorig@gmail.com</td>
                <td>Admin</td>
                <td>Admin</td>
                <td
                  style={{
                    width: "200px",
                    height: "fit-content",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      width: "100%",
                      justifyContent: "center",
                      marginTop: "6px",
                    }}
                  >
                    {" "}
                    <img width={12} src={Delete} alt="" />
                    Устгах
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      width: "100%",
                      justifyContent: "center",
                      marginTop: "6px",
                    }}
                  >
                    <img className={Css.addimg} width={12} src={add} alt="" />
                    Засах
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      width: "100%",
                      justifyContent: "center",
                      marginTop: "6px",
                    }}
                  >
                    <img className={Css.addimg} width={12} src={add} alt="" />
                    Эрх нэмэх
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Santo service LLC</td>
                <td>Admin</td>
                <td>Оюундалай</td>
                <td>Ихзориг</td>
                <td>94442911</td>
                <td>karaylaihzorig@gmail.com</td>
                <td>Admin</td>
                <td>Admin</td>
                <td
                  style={{
                    width: "200px",
                    height: "fit-content",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      width: "100%",
                      justifyContent: "center",
                      marginTop: "6px",
                    }}
                  >
                    {" "}
                    <img width={12} src={Delete} alt="" />
                    Устгах
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      width: "100%",
                      justifyContent: "center",
                      marginTop: "6px",
                    }}
                  >
                    <img className={Css.addimg} width={12} src={add} alt="" />
                    Засах
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      width: "100%",
                      justifyContent: "center",
                      marginTop: "6px",
                    }}
                  >
                    <img className={Css.addimg} width={12} src={add} alt="" />
                    Эрх нэмэх
                  </div>
                </td>
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

export default Users;
