import React, { useEffect, useState } from "react";
import Css from "../users/table.module.css";
import mine from "./assets/mine.svg";
import group from "./assets/group.svg";
import search from "../../assets/search.svg";
import down from "../../assets/down.svg";
import left from "./assets/left.svg";
import Delete from "./assets/delete.svg";
import add from "./assets/add.svg";

import axios from "axios";

const Company = () => {
  const [datas, setdatas] = useState([]);
  const [office, setoffice] = useState([]);

  // Assuming you have a user object defined somewhere
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "http://localhost:3000/api/v1/companies/"
        );
        console.log(response.data.data);
        setdatas(response.data.data);
        const res = await axios.get("http://localhost:3000/api/v1/offices/");
        setoffice(res.data.data);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const addCompany = () => {};

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
            <div onClick={addCompany} className={Css.adduser}>
              Компани бүртгэх
            </div>
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
                  <th>
                    <div className={Css.columnheader}>
                      <span>Үйлдэл</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className={Css.customtbody}>
                {datas.length > 0 ? (
                  datas.map((company, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{company.name}</td>
                      <td>{company.register}</td>
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
                          <img
                            className={Css.addimg}
                            width={12}
                            src={add}
                            alt=""
                          />
                          Засах
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
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
                      <span>Оффис</span>
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
                {office.length > 0 ? (
                  office.map((off, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{off.companyName}</td>
                      <td>{off.address}</td>
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
                          <img
                            className={Css.addimg}
                            width={12}
                            src={add}
                            alt=""
                          />
                          Засах
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No data available</td>
                  </tr>
                )}
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
