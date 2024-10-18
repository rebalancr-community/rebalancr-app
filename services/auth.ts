import axiosInstance from "./config";

export const register = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/auth/signup", {
      email,
      password,
    });
    const { token } = response.data;

    localStorage.setItem("token", token);

    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    const { token } = response.data;

    localStorage.setItem("token", token);

    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post("/auth/logout");

    return response.data;
  } catch (error: any) {
    throw error;
  }
};
