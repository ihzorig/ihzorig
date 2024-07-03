import React from "react";

const CompanyRegister = () => {
  return (
    <div className={Css.container}>
      <div className={Css.box}>
        <div className={Css.header}>
          <h1>Register FORM</h1>
        </div>
        <div className={Css.body}>
          <div>
            <label htmlFor="company">Компани</label>
            <input type="text" id="company" />
          </div>
          <div>
            <label htmlFor="register">Регистрийн дугаар</label>
            <input type="text" id="register " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegister;
