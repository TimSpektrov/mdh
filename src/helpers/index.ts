import parse from 'html-react-parser';

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

export const addNbspParse = (value: string) => {
  console.log(value);
  return parse(addNbsp(value))
}

//  расчёт индекса большого элемента работ
export const bigItemWork = (number: number) => {
  if(number % 2 === 0) return number
  return (Math.floor(number / 4) * 4)
}

export const toHtmlList = (str: string) => {
  const arr = str.split('\r\n');
  return arr.length > 1 ?
    ('<ul>' + (arr.map((str) => '<li>' + str + '</li>').join('')) + '</ul>') :
    ('<p>' + arr[0] + '</p>')
}

export const setRotatePosition = (index: number, length: number) => {
  const value = ((index + 1) / (length + 1))

  if(value === .25) return {
    left: `100%`,
    translate: `0 -50%`
  }
  if(value === .5) return {
    top: `100%`,
    translate: `-50% 0`
  }

  if(value === .75) return {
    right: `100%`,
    translate: `0 -50%`
  }



  // return {
  //   index,
  //   // left,
  //   // top,
  //    value,
  // }
}