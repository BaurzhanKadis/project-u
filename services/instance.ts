import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // это что?
});

// // Добавим интерцептор для запросов, чтобы сохранять куки
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Включаем куки с каждым запросом
//     config.withCredentials = true;
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Добавим интерцептор для ответов, чтобы логировать проблемы
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       console.error("API Error:", error.response.status, error.response.data);

//       // Если получаем 401, можно перенаправить на логин
//       if (error.response.status === 401 && typeof window !== "undefined") {
//         console.log("Unauthorized, redirecting to login...");
//         // Но не перенаправляем автоматически здесь, пусть компонент решает
//       }
//     } else if (error.request) {
//       console.error("API Error: No response received", error.request);
//     } else {
//       console.error("API Error:", error.message);
//     }

//     return Promise.reject(error);
//   }
// );
