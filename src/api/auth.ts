import { instance } from "./instance";
import ISignup from "../interface/auth";
import ISignin from "../interface/auth";

export const Signup = (user: ISignup) => {
  return instance.post("/signup", user);
};
export const Signin = (user: ISignin) => {
  return instance.post("/signin", user);
};
