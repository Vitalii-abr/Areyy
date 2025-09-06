function User(id, name, surname, age, isMale, email, isSubscribet) {
    this.id = id;
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribet = isSubscribet;
}

const userProto = {};
userProto.getFullName = function () {
    return this.firstName + " " + this.lastName;
};

User.userProto = userProto;

class Uzzer {
    construktor (name, surname, age, isMale, email, isSubscribet) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribet = isSubscribet;  
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const uzzer2 = new Uzzer(
    'Adam',
    'Adamowich',
    23,
    true,
    'test@Comment.com',
    true
);

console.log(uzzer2.getFullName());


function f(user) {
    const { userName, firstName, age} = user;

    console.log('userName :>> ', userName);
    console.log('firstName :>> ', firstName);
    console.log('age :>> ', age);
} 

const user = {
    userName : 'Test',
    firstName : 'Testovich',
    age : 25,
};

f(user);

const book = {
    author: 'Astred Lingren',
    title: 'Karlson'

};

f(book);

const {author, title} = book;
console.log('author :>> ', author);
    console.log('title :>> ', title);


    const book1 = {
        author: {
            firstName: 'Astred', 
            lastName: 'Lingren',
        },
        price: 12
    };

    const {
        author: {firstName, lastName},
price,
    } = book1;
console.log( firstName);
console.log('lastName :>> ', lastName);
console.log('price', price);