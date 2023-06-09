import mongoose from "mongoose";
import { v4 } from "uuid";
const accountSchema = new mongoose.Schema({
  _id: { type: String, required: true, unique: true, default: v4 },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});
export const accountModel = mongoose.model("accounts", accountSchema);
