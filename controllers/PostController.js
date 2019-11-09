let PostModel = require("../models/PostModel.js");

module.exports = {
  getAll: async(req,res) => {
    let allUsers = await PostModel.find();
    res.json(allUsers);
  },
  findOne: async(req,res) => {
    let found = await PostModel.find({title: req.body.title});
    res.json(found);
  },
  create: async(req,res) => {
    let newPost = new PostModel({
      title: req.body.title,
      content: req.body.content
    })
    let savedPost = await newPost.save();
    res.json(savedPost);
  },
  update: async(req,res) => {
    let found = await PostModel.findOneAndUpdate({title: req.body.title}, req.body, {
      useFindAndModify: false
    });
    res.json(found);
  },
  delete: async(req,res) => {
    let deleted = await PostModel.findOneAndDelete({title: req.body.title});
    res.json(deleted);
  }
}