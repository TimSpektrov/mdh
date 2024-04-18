/**
 * Генерация случайных id
*/
type GenerateId = () => string;

export const generateId: GenerateId = () => (
  Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);

// перевод в uppercase
export const setUppercase = (str: string): string => {
  return str.toUpperCase()
}

// добавление неразрывных пробелов
export const addNbsp = (value: string) => {
  if (value) {
    return value.replace(/(\s[А-Яа-яA-Za-z]{1,2})\s+/g,'$1&nbsp;');
  } else {
    return value;
  }
}