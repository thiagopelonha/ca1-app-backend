// Importing moongose to get our model
// to use in our controllers functions
const mongoose = require("mongoose");
const task = mongoose.model("task");

// List all tasks controller function
exports.list_all = (req, res) => {
  // Using moongose model to find model "taks"
  // without params
  task.find({}, (err, tasks) => {
    if (err) res.send(err);
    res.json(tasks);
  });
};

