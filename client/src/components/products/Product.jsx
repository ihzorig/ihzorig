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

const Product = () => {
  const [showPasswords, setShowPasswords] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPasswords(!showPasswords);
  };

  // Assuming you have a user object defined somewhere

  return (
    <div className={Css.container}>
      <div className={Css.header}>
        <h1>Бараа бүртгэл</h1>
        <div className={Css.option}>
          <div className={Css.option1}>
            <img style={{ width: "20px" }} src={mine} alt="" />
            Миний бараа бүртгэл
          </div>
          <div className={Css.option2}>
            <img style={{ width: "20px" }} src={group} alt="" />
            Бүх бараа бүртгэл{" "}
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
            <p>Барааны дэлгэрэнгүй</p>
            <div className={Css.adduser}>Хэрэглэгч бүртгэх</div>
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
                    <span>Хөрөнгийн төрөл</span>
                    <img width={15} src={filter} alt="Email" />
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Хөрөнгийн нэр</span>
                    <img width={15} src={filter} alt="Email" />
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Ашиглах хугацаа</span>
                    <img width={15} src={filter} alt="Email" />
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Хүлээж авсан огноо</span>
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Тоо ширхэг</span>
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Байршил</span>
                    <img width={15} src={filter} alt="Email" />
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Зураг</span>
                  </div>
                </th>
                <th style={{ width: "300px" }}>
                  <div className={Css.columnheader}>
                    <span>Тайлбар</span>
                  </div>
                </th>
                <th>
                  <div className={Css.columnheader}>
                    <span>Үйлдэл</span>
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
                <td>Admin</td>
                <td>Admin</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum consequuntur rerum ut temporibus? Sed, nulla error nam
                  eos voluptatem distinctio!
                </td>
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
                <td>2</td>
                <td>Santo service LLC</td>
                <td>Admin</td>
                <td>Оюундалай</td>
                <td>Ихзориг</td>
                <td>94442911</td>
                <td>karaylaihzorig@gmail.com</td>
                <td>Admin</td>
                <td>Admin</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum consequuntur rerum ut temporibus? Sed, nulla error nam
                  eos voluptatem distinctio!
                </td>
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

export default Product;
