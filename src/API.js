const API_URL = "https://sleepapp-api.herokuapp.com/";

const apiSettings = {
  fetchUsers: async () => {
    return await (await fetch(API_URL)).json();
  },
  fetchUser: async (Id) => {
    const endpoint = `${API_URL}${Id}`;
    return await (await fetch(endpoint)).json();
  },
  createUser: async (data) => {
    const formData = new FormData();
    formData.append("Avatar", data["Avatar"][0]);
    formData.append(
      "data",
      JSON.stringify({
        Id: data["Id"],
        Name: data["Name"],
        Cmnd: data["Cmnd"],
        Email: data["Email"],
        Phone: data["Phone"],
        Notification: [],
      })
    );
    await fetch(API_URL, {
      method: "POST",
      body: formData,
    })
      .then(alert("Thêm tài xế thành công"))
      .catch((error) => alert(error));
  },
  login: async (username, password) => {
    const endpoint = `${API_URL}login/username=${username}&password=${password}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
