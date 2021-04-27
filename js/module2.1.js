const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
let message = `Пользователь ${loginToFind} не найден`

for (const login of logins){
    // console.log(login);
    if(login === loginToFind){
        message = ('Нашли!');
        break;
    }
}
// console.log(message);

// console.log(logins.includes(loginToFind));//true

// logins.includes(loginToFind) ? console.log(`Нашли!`) : console.log(message);

const numbers = [51, 18, 13, 24, 7, 85, 19];

let smallest = numbers[0];

for(const number of numbers){
    if(number<smallest){
        smallest = number;

    }
}
// console.log(smallest);//7
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// console.log(friends);
// console.log(friends.join(','));

// const string = 'qWeRTzxCv';
const string = 'JaVaScRiPt';

const letters = string.split('');
let invertedString = '';
for(const letter of letters){

//     if(letter === letter.toLocaleLowerCase()){
//     invertedString +=letter.toUpperCase()
//     continue;
// }
// invertedString +=letter.toLocaleLowerCase()
invertedString += letter === letter.toLowerCase()? 
letter.toUpperCase(): letter.toLowerCase()
}
// console.log(invertedString);
const title = 'Top 10 benefits of React framework';
const normalized = title.toLocaleLowerCase().split(' ').join('-');

// console.log(normalized);
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const newArr = array1.concat(array2);
// console.log(newArr);

for(let number of newArr){
    total += number;

}
// console.log(total);

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];

  const cardToRemove = 'Карточка-3';
  const index = cards.indexOf(cardToRemove)
//   console.log(index);

//   cards.splice(index, 1)
  cards.splice( 1, 1, 'New Card')
//   console.log(cards);

