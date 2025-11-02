// authActions.js
import { authActions } from "../slices/authSlice";
import request from "../../utils/constants";
import { toast } from "react-toastify";

// Register user
export function registerUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await request.post("/api/auth/register", user);
      dispatch(authActions.register(data.message));
      
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
}