import React, { useEffect, useState } from "react";
import ListUser from "./components/ListUser";
import Loading from "./components/Loading";
import Logo from "./components/Logo";
import API from "./API";
import User from "./components/User";
import Button from "./components/Button";
import Form from "./components/Form";
import Common from "./components/Common";

function App() {
  const [loadingInfo, setLoadingInfo] = useState(1);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const fetchUsers = async () => {
    try {
      setError(false);
      setLoadingInfo(0);
      const users_data = await API.fetchUsers();
      setUsers(users_data);
    } catch (error) {
      setError(true);
    }
    setLoadingInfo(1);
  };

  const fetchUser = async (Id) => {
    try {
      setError(false);
      setLoadingInfo(0);
      if (Id !== null) {
        const user_data = await API.fetchUser(Id);
        setUser({
          ...user_data,
        });
      } else {
        const timer = await setTimeout(() => {
          setUser(null);
          setLoadingInfo(2);
        }, 200);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      setError(true);
    }
    setLoadingInfo(3);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const LoadInfo = () => {
    if (loadingInfo === 0) {
      return <Loading />;
    } else if (loadingInfo === 1) {
      return <Common users={users} />;
    } else if (loadingInfo === 2) {
      return <Form users={users} />;
    } else if (loadingInfo === 3) {
      return <User user={user} />;
    }
  };

  if (error) return <div>Something went wrong ...</div>;

  return (
    <div className="container">
      <div className="menu">
        <Logo />
        <Button text="chung" handleClick={() => fetchUsers()} />
        <Button text="thêm tài xế" handleClick={() => fetchUser(null)} />
        <ListUser users={users} fetchUser={fetchUser} />
      </div>
      <div className="info">{LoadInfo()}</div>
    </div>
  );
}

export default App;
