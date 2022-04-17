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

// Update task
exports.update = (req, res) => {
  // The diference between this method and create is
  // that this method asks an ID to save
  // First the mongo filter the model and then update with
  // the fields passed into the body (JSON)
  task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(task);
    }
  );
};
