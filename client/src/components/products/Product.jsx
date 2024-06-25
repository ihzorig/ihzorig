import React from "react";
import Css from "../users/table.module.css";
import mine from "./assets/mine.svg";
import group from "./assets/group.svg";
const Product = () => {
  return (
    <div className={Css.container}>
      <div className={Css.header}>
        <h1>Бараа бүтээгдэхүүн</h1>
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
      <table className={Css.counttable}>
        <thead>
          <tr>
            <th>№</th>
            <th>Компани</th>
            <th>Хөрөнгийн төрөл</th>
            <th>Хөрөнгийн нэр</th>
            <th>Ашиглалтанд орсон огноо</th>
            <th>Ашиглах хугацаа </th>
            <th>Хүлээж авсан огноо</th>
            <th>Тоо ширхэг</th>
            <th>Байршил</th>
            <th>Тайлбар</th>
            <th>Зураг</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Santo services LLC</td>
            <td>Admin</td>
            <td>Оюундалай</td>
            <td>Ихзориг</td>
            <td>94442911</td>
            <td>karaylaihzorig@gmail.com</td>
            <td>admin</td>
            <td>admin</td>
            <td style={{ width: "200px" }}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Product;
