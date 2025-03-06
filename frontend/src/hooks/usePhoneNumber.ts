import { useState, useEffect } from 'react';

const usePhoneNumber = (initialValue = '') => {
  const [phoneNumber, setPhoneNumber] = useState(initialValue);

  useEffect(() => {
    setPhoneNumber(formatPhoneNumber(initialValue));
  }, [initialValue]);

  // Функция для форматирования номера
  const formatPhoneNumber = (value: string) => {
    // Убираем все символы, кроме цифр
    let cleaned = value.replace(/\D/g, '');

    // Форматируем в международный формат (пример: +7 (123) 456-78-90)
    if (cleaned.length <= 3) {
      return `+7 (${cleaned}`;
    }
    if (cleaned.length <= 6) {
      return `+7 (${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    }
    if (cleaned.length <= 10) {
      return `+7 (${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 8)}-${cleaned.slice(8, 10)}`;
    }
    return `+7 (${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 8)}-${cleaned.slice(8, 10)}`;
  };

  return phoneNumber;
};

export default usePhoneNumber;
