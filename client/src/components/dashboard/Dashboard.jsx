import React from "react";
import Css from "./dashboard.module.css";
import check from "../../assets/check.svg";
const Dashboard = () => {
  return (
    <div className={Css.container}>
      <div className={Css.first}>
        <div>
          <h2>Тоо ширхэгийн мэдээлэл</h2>
        </div>
        <div className={Css.boxes}>
          <div className={Css.box}>
            <div className={Css.topsec}>
              <p className={Css.too}>228</p>
              <p>Ширхэг</p>
            </div>
            <div className={Css.bottext}>
              <img src={check} alt="" />
              Нийт Бараа
            </div>
          </div>
          <div className={Css.box}>
            <div className={Css.topsec}>
              <p className={Css.too} style={{ color: "red" }}>
                28
              </p>
              <p>Багц</p>
            </div>
            <div className={Css.bottext}>
              <img src={check} alt="" />
              Нийт Багц
            </div>
          </div>
          <div className={Css.box}>
            <div className={Css.topsec}>
              <p className={Css.too} style={{ color: "#00B873" }}>
                13
              </p>
              <p>Төрөл</p>
            </div>
            <div className={Css.bottext}>
              <img src={check} alt="" />
              Нийт Төрөл
            </div>
          </div>
          <div className={Css.box}>
            <div className={Css.topsec}>
              <p className={Css.too} style={{ color: "blue" }}>
                8
              </p>
              <p>Акталагдсан бараа</p>
            </div>
            <div className={Css.bottext}>
              <img src={check} alt="" />
              Нийт Акт
            </div>
          </div>
        </div>
      </div>
      <div className={Css.second}>
        <h2>Худалдан авалтын мэдээлэл</h2>
        <div className={Css.inHand}>
          <div className={Css.text1}>
            <p>Гарт байгаа нийт тоо хэмжээ</p>{" "}
          </div>
          <div
            style={{
              borderLeft: "1px solid gainsboro",
              padding: "0px 10px",
              fontWeight: "bold ",
              fontSize: "18px",
            }}
          >
            123210
          </div>
        </div>
        <div className={Css.inHand}>
          <div className={Css.text1}>
            <p>Хүлээн авах нийт тоо хэмжээ</p>{" "}
          </div>
          <div
            style={{
              borderLeft: "1px solid gainsboro",
              padding: "0px 10px",
              fontWeight: "bold ",
              fontSize: "18px",
            }}
          >
            210
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
