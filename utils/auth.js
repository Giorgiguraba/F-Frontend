import axios from "axios";

export const verifyToken = async (token) => {
  try {
    const res = await axios.post("http://localhost:3001/api/verify-token", { token });
    return res.data;
  } catch (error) {
    return null;
  }
};
