function User(id, name, surname, age, isMale, email, isSubscribet) {
    this.id = id;
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribet = isSubscribet;
}

User.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
};
 const users = [];

 for (let i = 0; i < 10; i++) {

const user = new User(
i + 1,
"Username" + 1,
"Usersurname" + 1,
Math.floor(Math.random() * 90), 
Math.random() < 0.5,
"useremail" + 1 + "@gmail.com",
Math.random() < 0.5
);
   users.push(user);
}
 
 //
 const notSubscribed = users.filter(u => !u.isSubscribed);
 console.log('notSubscribed :>> ', notSubscribed);

 //
 const fullNames = users.map(u => u.getFullName());
 console.log('fullNames :>> ', fullNames); 

 //
 const schoolGirls = users
 .filter(u => !u.isMale && u.age >= 6 && u.age <= 18)
 .map(u => u.getFullName());
 console.log('schoolGirls :>> ', schoolGirls);

 //
 const withoutEmail15 = users.filter(u => u.email !== "ivan.shevchenko5@gmail.com");
 console.log('withoutEmail15 :>> ', withoutEmail15);

 //
 const user2 = users.find(u => u.id === 2);
 if (user2) user2.email = "newemai12@gmail.com";
 console.log('user2 :>> ', user2); 