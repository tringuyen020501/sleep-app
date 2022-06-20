function User({ user }) {
  const parseDateTime = (DateTime) => {
    var m = new Date(DateTime);
    var dateString =
      m.getUTCDate() +
      "/" +
      (m.getUTCMonth() + 1) +
      "/" +
      m.getUTCFullYear() +
      " " +
      m.getHours() +
      ":" +
      m.getUTCMinutes() +
      ":" +
      m.getUTCSeconds();
    return dateString;
  };

  if (user === null) {
    return <></>;
  }

  return (
    <>
      <div className="user_info">
        <div className="personal_info">
          <div className="avatar_container">
            <img
              src={
                user.Avatar === ""
                  ? "https://freenice.net/wp-content/uploads/2021/10/Hinh-ve-don-gian-cute-dang-yeu-va-de-thuc-hien.jpg"
                  : `https://sleepapp-api.herokuapp.com/${user.Avatar}`
              }
              alt="Avatar"
              className="avatar"
            />
          </div>

          <div className="user_info_item">
            <label>Mã</label>
            <span>{user.Id}</span>
          </div>
          <div className="user_info_item">
            <label>Thông báo</label>
            <span>{user.Notification.length}</span>
          </div>
          <div className="user_info_item">
            <label>Tên</label>
            <span>{user.Name}</span>
          </div>
          <div className="user_info_item">
            <label>CMND</label>
            <span>{user.Cmnd}</span>
          </div>
          <div className="user_info_item">
            <label>Email</label>
            <span>{user.Email}</span>
          </div>
          <div className="user_info_item">
            <label>Số điện thoại</label>
            <span>{user.Phone}</span>
          </div>
        </div>

        <div className="user_notify">
          <div>
            <h2 className="title_notify">Thông báo</h2>
            <ul>
              {user.Notification.map((notify) => {
                return (
                  <li key={notify.Time}>
                    <span>{parseDateTime(notify.Time)} :</span>
                    <span>{notify.Text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default User;
