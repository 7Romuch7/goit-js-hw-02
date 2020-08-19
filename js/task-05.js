/*const countryName = prompt (`Укажите страну доставки товара`);

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В вашей стране доставка недоступна';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
country = countryName[0].toUpperCase() + countryName.toLowerCase().slice(1);
  switch (country) {
  // Write code under this line
   case CHINA:
      price = 100;
      break;
    case AUSTRALIA:
      price = 170;
      break;
    case INDIA:
      price = 80;
      break;
    case JAMAICA:
      price = 120;
      break;
    default:
      message = NO_DELIVERY; 
  }
}
if (price > 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

alert(message);*/