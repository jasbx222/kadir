import axios from "axios";
const DeleteMethod = async (url, id) => {
  try {
    const  token=localStorage.getItem('token')
    if (!token) {
      console.log("no token !");
      return;
    }

    await axios.delete(`${url}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }

  return null;
};

export default DeleteMethod;
