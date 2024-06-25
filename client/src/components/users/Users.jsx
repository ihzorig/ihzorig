import React, { useState } from "react";
import Css from "./table.module.css";
import mine from "./assets/mine.svg";
import group from "./assets/group.svg";
import Delete from "./assets/delete.svg";
import add from "./assets/add.svg";
import search from "../../assets/search.svg";
import down from "../../assets/down.svg";
import edit from "./assets/edit.svg";

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
            <p>Хэрэглэгч засах</p>
            <p className={Css.adduser}>Хэрэглэгч бүртгэх</p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Компани</th>
              <th>Албан тушаал</th>
              <th>Овог</th>
              <th>Нэр</th>
              <th>Утас</th>
              <th>Мэйл хаяг</th>
              <th>Эрх олголт</th>
              <th>Нэвтрэх нэр</th>
              <th>Үйлдэл</th>
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
                  Эрх нэмэх
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
                  <img className={Css.editimg} width={15} src={edit} alt="" />
                  Засах
                </div>
              </td>
            </tr>{" "}
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
                  Эрх нэмэх
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
                  <img className={Css.editimg} width={15} src={edit} alt="" />
                  Засах
                </div>
              </td>
            </tr>{" "}
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
                  Эрх нэмэх
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
                  <img className={Css.editimg} width={15} src={edit} alt="" />
                  Засах
                </div>
              </td>
            </tr>{" "}
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
                  Эрх нэмэх
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
                  <img className={Css.editimg} width={15} src={edit} alt="" />
                  Засах
                </div>
              </td>
            </tr>
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
                  Эрх нэмэх
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
                  <img className={Css.editimg} width={15} src={edit} alt="" />
                  Засах
                </div>
              </td>
            </tr>
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
                  Эрх нэмэх
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
                  <img className={Css.editimg} width={15} src={edit} alt="" />
                  Засах
                </div>
              </td>
            </tr>
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
                  Эрх нэмэх
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
                  <img className={Css.editimg} width={15} src={edit} alt="" />
                  Засах
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
