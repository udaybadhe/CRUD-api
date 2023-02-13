const axios = require("axios");
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase');

const dataSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Data = mongoose.model('Data', dataSchema);
const app = express();

app.listen(3301, () => {
  app.post('/', async (req, res)=>{
    const data = new Data({
        name: name,
        age: age
      });
    
    const result = await data.save();
    return res.json({result});
  });

  app.get('/', async (req, res)=>{
    const result = await Data.find((error, data) => {
        if (error) {
            return error;
          } else {
            return data;
          }
      });
    return res.json({result});
  });

  app.put('/', async (req, res)=>{
    const result = await Data.findOneAndUpdate({name: name}, {age: age}, {new: true}, (error, data) => {
        if (error) {
          return error;
        } else {
          return data;
        }
      });
    return res.json({result});
  });

  app.delete('/', async (req, res)=>{
    const result = await Data.findOneAndRemove({name: name}, (error, data) => {
        if (error) {
            return error;
          } else {
            return data;
          }
      });
    return res.json({result});
  });
});