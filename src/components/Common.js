function Common({ users }) {
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
  const list = [];
  users.forEach((user) => {
    user.Notification.forEach((notify) => {
      list.push({
        Id: user.Id,
        Name: user.Name,
        Time: notify.Time,
        Text: notify.Text,
      });
    });
  });
  const listSort = list.sort((a, b) => new Date(b.Time) - new Date(a.Time));
  return (
    <>
      <h2 className="common_title">Quản lý tài xế</h2>
      <ul className="common_container">
        {listSort.map((item) => {
          return (
            <li key={item.Time}>
              <div className="common_item">
                <p>{parseDateTime(item.Time)}</p>
                <p>
                  {item.Name} ({item.Id})
                </p>
                <p>{item.Text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Common;
