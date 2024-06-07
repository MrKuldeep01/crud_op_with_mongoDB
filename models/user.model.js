const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/usersDBTesting`);
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  mail: {
    type: String,
    require: true,
    unique: true,
  },
  img: {
    type: String,
    require: true,
  },
},{timestamps:true});
module.exports = mongoose.model("user", userSchema);
