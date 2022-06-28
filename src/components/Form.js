import React, { useState } from "react";
import { useForm } from "react-hook-form";
import API from "../API";
function Form({ users }) {
  const [url, setURL] = useState(
    "https://freenice.net/wp-content/uploads/2021/10/Hinh-ve-don-gian-cute-dang-yeu-va-de-thuc-hien.jpg"
  );
  const changeHandler = (event) => {
    setURL(URL.createObjectURL(event.target.files[0]));
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    var ok = true;
    users.forEach((user) => {
      console.log(user);
      if (user.Id === data["Id"]) {
        alert("Đã tồn tại mã này. Vui lòng đăng kí mã khác");
        ok = false;
      }
    });
    if (ok === true) await API.createUser(data);
  };
  return (
    <div className="form_box">
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_avatar_container">
          <img src={url} alt="Avatar" className="form_avatar" />
          <input
            type="file"
            accept="image/*"
            className="form_avatar_input"
            name="avatar"
            {...register("Avatar")}
            onChange={changeHandler}
          />
        </div>
        <div className="form_input">
          <input type="text" name="Id" required {...register("Id")} />
          <label>Mã</label>
        </div>
        <div className="form_input">
          <input type="text" name="Name" required {...register("Name")} />
          <label>Họ và tên</label>
        </div>
        <div className="form_input">
          <input type="text" name="Cmnd" required {...register("Cmnd")} />
          <label>Căn cước công dân</label>
        </div>
        <div className="form_input">
          <input type="text" name="Email" required {...register("Email")} />
          <label>Email</label>
        </div>
        <div className="form_input">
          <input type="text" name="Phone" required {...register("Phone")} />
          <label>Số điện thoại</label>
        </div>
        <button type="submit" className="form_btn">
          Xác nhận
        </button>
      </form>
    </div>
  );
}
export default Form;
