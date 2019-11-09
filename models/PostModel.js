let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let PostSchema = new Schema({
  title: String,
  content: String
})

module.exports = mongoose.model("Post", PostSchema);