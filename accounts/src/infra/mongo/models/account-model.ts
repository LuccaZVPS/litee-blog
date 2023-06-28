import mongoose from "mongoose";
import { v4 } from "uuid";
const accountSchema = new mongoose.Schema({
  _id: { type: String, required: true, unique: true, default: v4 },
  name: { type: String, required: true },
  imageName: { type: String, required: true },
  imagePath: { type: String, required: false },
  email: { type: String, required: false, unique: true },
  password: { type: String, required: false },
});
export const accountModel = mongoose.model("accounts", accountSchema);
