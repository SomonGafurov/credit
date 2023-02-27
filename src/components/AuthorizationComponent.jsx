import React, { useState, useEffect } from "react";
import "./AuthorizationComponent.css";

const AuthorizationComponent = () => {
  const [admin, setAdmin] = useState({});
  const [adminForm, setAdminForm] = useState({});

  const changeHandler = (event) => {
    setAdminForm({
      ...adminForm,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const onLogAdmin = () => {
    if (
      admin.login === adminForm.login.trim() &&
      admin.password === adminForm.password.trim()
    ) {
      localStorage.setItem("user", JSON.stringify(adminForm));
      window.location.reload();
    } else {
      alert("Данные неправильные");
    }
  };

  console.log(adminForm);

  useEffect(() => {
    fetch("http://localhost:4000/AuthorizationComponent")
      .then((response) => response.json())
      .then((data) => setAdmin(data[0]));
  }, []);

  return (
    <>
      <div className="login">
        <img src="./logo_ru.png" alt="" className="image" />
        <div className="form">
          <input
            className="auth-input"
            type="text"
            name="login"
            placeholder="Введите имя"
            onChange={changeHandler}
          />
        </div>
        <div className="form">
          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Введите пароль"
            onChange={changeHandler}
          />
        </div>
        <div>
          <button className="log" onClick={onLogAdmin}>
            Войти
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthorizationComponent;

// import { React, useState } from "react";
// import { Link } from "react-router-dom";
// import "./AuthorizationComponent.css";

// export default function AuthorizationComponent() {
//   const [user, setUser] = useState({
//     login: "",
//     password: "",
//   });
//   console.log(user);
//   const onUserChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };
//   const onSubmit = () => {
//     localStorage.setItem("user", JSON.stringify(user));
//     window.location.reload(true);
//   };

//   return (
//     <div className="login">
//       <Link to="/">
//         <img src="logo_ru.png" alt="" className="image" />
//       </Link>

//       <form action="" onSubmit={onSubmit} className="form">
//         <div>
//           <input
//             onChange={(e) => onUserChange(e)}
//             name="login"
//             placeholder="login"
//             required
//             type="text"
//             className="auth-input"
//           />

//           <input
//             onChange={(e) => onUserChange(e)}
//             name="password"
//             placeholder="password"
//             required
//             type="text"
//             className="auth-input"
//           />
//           <button onSubmit={onSubmit} className="log">
//             Log in
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
