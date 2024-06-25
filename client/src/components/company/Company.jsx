import React from "react";
import Css from "../users/table.module.css";

const Company = () => {
  return (
    <div className={Css.container}>
      <div className={Css.header}>
        <h2>Компани</h2>
        <div className={Css.option}>
          <div className={Css.option1}>Миний бүртгэл</div>
          <div className={Css.option2}>Бүх бүртгэл </div>
        </div>
      </div>
      <table>
        <tr>
          <th>№</th>
          <th>Компани</th>
          <th>Компанийн регистрын дугаар</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Santo Service LLC</td>
          <td>1234567890</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Santo Service LLC</td>
          <td>1234567890</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Santo Service LLC</td>
          <td>1234567890</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Santo Service LLC</td>
          <td>1234567890</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Santo Service LLC</td>
          <td>1234567890</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Santo Service LLC</td>
          <td>1234567890</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Santo Service LLC</td>
          <td>1234567890</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Santo Service LLC</td>
          <td>1234567890</td>
        </tr>
      </table>
    </div>
  );
};

export default Company;
