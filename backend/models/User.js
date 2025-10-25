// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  email: String,
  name: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", UserSchema);
