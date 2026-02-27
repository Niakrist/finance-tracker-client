export const getContentType = () => ({
  'Content-Type': 'application/json'
})

// Функция принимает объект ошибки (обычно тот, который возвращает axios или подобная библиотека) и
//  извлекает из него понятное текстовое сообщение. Она пытается достать сообщение из структуры error.response.data.message,
//  которая типична для многих API, и если его нет — возвращает стандартное свойство error.message.

export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message // Извлечение возможного сообщения из ответа сервера

  return message
    ? typeof error?.response?.data?.message === 'object'
      ? message[0]
      : message
    : error.message
}

// Типичная структура ошибки в axios:
// {
//   message: "Request failed with status code 500",
//   response: {
//     data: {
//       message: "Что-то пошло не так"          // <- вот это сообщение мы хотим достать
//     },
//     status: 500
//   }
// }

// const error = {
//   response: { data: { message: "Неверный пароль" } }
// };
// errorCatch(error); // "Неверный пароль"

// const error = {
//   response: { data: { message: ["Поле email обязательно", "Пароль слишком короткий"] } }
// };
// errorCatch(error); // "Поле email обязательно"

// const error = new Error("Network Error");
// errorCatch(error); // "Network Error"
