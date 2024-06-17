import axios from "axios";

export const getUserApi = async () => {
  try {
    const res = await axios.get("https://ipapi.co/json/");
    return res.data.country;
  } catch (error) {
    console.error("Error fetching user country:", error);
    return null;
  }
};
