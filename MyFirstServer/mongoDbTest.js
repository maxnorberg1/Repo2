const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

  const kittySchema = new mongoose.Schema({
    name: String,
    email: String,
  });

  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ name: 'Silence' });

  console.log(silence.name); // 'Silence'


  const personSchema = new mongoose.Schema({
    name: String,
    age: Number
  });

  personSchema.method.speak = () => {
    console.log("hej");
    const presentation = this.name 
    ? `my name is ${this.name} `
    :`we are watching you!`;
    console.log(presentation);
  }

  kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }

  const Person= mongoose.model('Person', personSchema);

  const Max = new Person({ name: "Max", age: 18 });

    Max.speak(); 

  Max.save(function (err, Max) {
    if (err) return console.error(err);
    Max.speak();
  });

  Max.save()

 if(!Person.find({name: Max.name }))
  Max.save()

  Person.find({ name:"Max"}, callback);