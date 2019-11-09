let express = require("express");
let app = express();
let mongoose = require("mongoose");

//connect to db
mongoose.connect("mongodb+srv://brandon123:123@devconnection-dazbv.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected");
}).catch(err => {
  console.log(err);
})

//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//controllers 
let PostController = require("./controllers/PostController");

//routes 
let PostRoutes = require("./routes/PostRoutes");
app.use("/", PostRoutes);

//ServerStart
app.listen(3000);