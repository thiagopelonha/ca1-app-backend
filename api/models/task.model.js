// Importing moongose and the Schema to create
// our model based on Mongo
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Creating our Schema as an JS Object
const taskSchema = new Schema(
  {
    // Name field is required and type String
    // And have a default message if
    // not filled
    name: {
      type: String,
      required: "name cannot be blank",
    },
    // Description field required and type String
    // Default mesage to if it's not filled
    description: {
      type: String,
      required: "description cannot be blank",
    },
  },
  { collection: "task" }
);

// Exporting our Schema as an Mongo Model based in
// the object created above
module.exports = mongoose.model("task", taskSchema);
