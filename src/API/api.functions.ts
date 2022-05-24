import { LoginUserType, RegisterUserType } from "../modules/auth/auth.types";
import usersData from "../API/users.json";

const { users } = usersData;

export const registerUser = async (registerData: RegisterUserType) => {
  if (users.includes(registerData)) {
    return false;
  }
  await users.push(registerData);
  console.log(users);
  return true;
};

export const loginUser = async (loginData: LoginUserType) => {
  console.log("users =>> ", users);
  const filter = await users.filter(
    (user) =>
      user.username === loginData.username &&
      user.password === loginData.password
  );

  if (filter.length === 1) return filter[0];
  else return false;
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};
