const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase');

const dataSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Data = mongoose.model('Data', dataSchema);

const command = process.argv[2];
const name = process.argv[3];
const age = process.argv[4];

if (command === 'create') {
  const newData = new Data({
    name: name,
    age: age
  });

  newData.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(newData);
    }
    mongoose.connection.close();
  });
} else if (command === 'read') {
  Data.find((error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
    mongoose.connection.close();
  });
} else if (command === 'update') {
  Data.findOneAndUpdate({name: name}, {age: age}, {new: true}, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
    mongoose.connection.close();
  });
} else if (command === 'delete') {
  Data.findOneAndRemove({name: name}, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
    mongoose.connection.close();
  });
} else {
  console.log(`Invalid command: ${command}`);
  mongoose.connection.close();
}
