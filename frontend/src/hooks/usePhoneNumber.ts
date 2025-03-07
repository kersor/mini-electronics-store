export const usePhoneNumber = (value: string) => {
  // Удаляем все нецифровые символы, кроме "+"
  const digits = value.replace(/[^\d+]/g, "");

  // Если поле пустое, возвращаем пустую строку
  if (!digits) return "";

  // Если пользователь удаляет "+7", позволяем полностью очистить поле
  if (digits === "+") return "";

  // Если пользователь удалил "+7" или начинает с другой цифры, добавляем "+7"
  if (!digits.startsWith("+7")) {
      return `+7 ${digits.replace(/^\+/, "").slice(0, 10)}`; // Ограничение до 10 цифр
  }

  // Удаляем префикс "+7" для дальнейшей обработки
  const phoneDigits = digits.slice(2);

  // Добавляем форматирование
  let formatted = "+7";
  if (phoneDigits.length > 0) {
      formatted += ` (${phoneDigits.slice(0, 3)}`;
  }
  if (phoneDigits.length >= 4) {
      formatted += `) ${phoneDigits.slice(3, 6)}`;
  }
  if (phoneDigits.length >= 7) {
      formatted += `-${phoneDigits.slice(6, 8)}`;
  }
  if (phoneDigits.length >= 9) {
      formatted += `-${phoneDigits.slice(8, 10)}`;
  }

  return formatted;
}