import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";

function Login() {
  return (
    <>
      <div className="login_align">
        <h1>Xin chào</h1>
        <div className="login_grid">
          <form action="#" method="#" className="login_form login">
            <div className="login_form__field">
              <label for="login__username">
                <FaUserAlt className="login_icon" />
                <span className="login_hidden">Tên đăng nhập</span>
              </label>
              <input
                id="login__username"
                type="text"
                name="username"
                className="login_form__input"
                placeholder="Tên đăng nhập"
                required
              />
            </div>
            <div className="login_form__field">
              <label for="login__password">
                <AiFillLock className="login_icon" />
                <span className="login_hidden">Mật khẩu</span>
              </label>
              <input
                id="login__password"
                type="password"
                name="password"
                className="login_form__input"
                placeholder="Mật khẩu"
                required
              />
            </div>
            <div className="login_form__field">
              <input type="submit" value="Đăng nhập" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
