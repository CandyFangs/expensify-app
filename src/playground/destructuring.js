console.log('destructuring');

// Object desctructuring

// const person = {
// 	name: 'Paulina', 
// 	age: 18,
// 	location: {
// 		city: 'Warsaw',
// 		temp: 10
// 	}
// };

// // console.log(`${person.name} is ${person.age}.`);

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);
// const { city, temp: temperature } =person.location;
// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
// 	title: 'Złodziej czasu',
// 	author: 'Terry Pratchett',
// 	publisher: {
// 		name: 'Prószyński i S-ka'
// 	}
// };

// const { name: publisherName = 'self-published'} = book.publisher;
// console.log(publisherName);

// Array destructuring

const address = ['Wólczyńska 69B', 'Warszawa', 'mazowieckie', '01-931'];

const [street, city, state, zip] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}.`)