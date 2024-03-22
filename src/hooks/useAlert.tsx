import { toast } from "react-toastify";

interface ICreateNotification {
  type: "error" | "success" | "info" | "warn";
  message: string;
}

export default function useAlert() {
  const createNotification = ({ type, message }: ICreateNotification) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "dark",
    });
  };

  return {
    createNotification,
  };
}
