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

// Create function
exports.create = (req, res) => {
  // Creating our model passing our body received (JSON)
  // and asks mongoose to save/persist data on mongo
  const newTask = new task(req.body);
  newTask.save((err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

// Read/Find a task function
exports.read = (req, res) => {
  // We pass a param named taskId to filter specific task on Mongo
  task.findById(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

