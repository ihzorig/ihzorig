import React from "react";
import Css from "./dashboard.module.css";
import check from "../../assets/check.svg";
import warning from "../../assets/warning.svg";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Хэрэглэж буй бараа", count: 129 },
    { name: "Захиалгат бараа", count: 67 },
    { name: "Нөөц бараа", count: 54 },
    { name: "Гэмтэлтэй бараа", count: 18 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "red"];

  return (
    <div className={Css.container}>
      <div className={Css.header}>
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
      <div className={Css.bots}>
        <div className={Css.details}>
          <div className={Css.detailsHeader}>
            <h3>Бараануудын мэдээлэл</h3>
          </div>
          <div className={Css.charts}>
            <div className={Css.data}>
              <div style={{ color: "#0088FE" }}>
                <p>Хэрэглэж буй бараа</p>
                <p>{data[0].count}</p>
              </div>{" "}
              <div style={{ color: "#00C49F" }}>
                <p>Захиалгат бараа</p>
                <p>{data[1].count}</p>
              </div>
              <div style={{ color: "#FFBB28" }}>
                <p>Нөөц бараа</p>
                <p>{data[2].count}</p>
              </div>{" "}
              <div style={{ color: "red" }}>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  Гэмтэлтэй бараа{" "}
                  <img src={warning} style={{ width: "18px" }} alt="" />
                </p>
                <p>{data[3].count}</p>
              </div>{" "}
            </div>
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                dataKey="count"
                cx={100}
                cy={100}
                innerRadius={30}
                outerRadius={60}
                fill="#8884d8"
                paddingAngle={2}
                label
                stroke="none"
                onMouseEnter={() => {}}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
        <div className={Css.details}>
          <div className={Css.detailsHeader}>
            <h3>Сүүлийн худалдан авалтууд </h3>
          </div>
          <div>
            <table>
              <tr className={Css.titles}>
                <th>Компани</th>
                <th>Хөрөнгийн төрөл</th>
                <th>Хөрөнгийн нэр</th>
                <th>Тоо ширхэг</th>
                <th>Зураг</th>
              </tr>
              <tr>
                <td>Santo Service LLC</td>
                <td>Тавилга</td>
                <td>Ширээ</td>
                <td>22</td>
                <td>
                  <a href="">Үзэх</a>
                </td>
              </tr>
              <tr>
                <td>Santo Service LLC</td>
                <td>Тавилга</td>
                <td>Ширээ</td>
                <td>22</td>
                <td>
                  <a href="">Үзэх</a>
                </td>
              </tr>
              <tr>
                <td>Santo Service LLC</td>
                <td>Тавилга</td>
                <td>Ширээ</td>
                <td>22</td>
                <td>
                  <a href="">Үзэх</a>
                </td>
              </tr>
              <tr>
                <td>Santo Service LLC</td>
                <td>Тавилга</td>
                <td>Ширээ</td>
                <td>22</td>
                <td>
                  <a href="">Үзэх</a>
                </td>
              </tr>
              <tr>
                <td>Santo Service LLC</td>
                <td>Тавилга</td>
                <td>Ширээ</td>
                <td>22</td>
                <td>
                  <a href="">Үзэх</a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
