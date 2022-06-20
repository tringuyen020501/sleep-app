import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";

function ListUser({ users, fetchUser }) {
  const [touch, setTouch] = useState(false);
  const listContainerRef = useRef(null);
  const listsRef = useRef(null);

  useEffect(() => {
    const listHeight = listsRef.current.getBoundingClientRect().height;
    if (touch) {
      listContainerRef.current.style.height = `${listHeight}px`;
    } else {
      listContainerRef.current.style.height = "0px";
    }
  }, [touch]);

  return (
    <>
      <nav className="nav_list_user">
        <Button text="danh sách tài xế" handleClick={() => setTouch(!touch)} />
        <div className="list_user_container" ref={listContainerRef}>
          <ul className="list_user" ref={listsRef}>
            {users.map((user) => {
              return (
                <li key={user.Id}>
                  <button
                    className="btn_user"
                    onClick={() => fetchUser(user.Id)}
                  >
                    {user.Name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default ListUser;
