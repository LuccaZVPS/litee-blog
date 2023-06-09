import mongoose from "mongoose";
import { v4 } from "uuid";
const verificationSchema = new mongoose.Schema({
  _id: { type: String, required: true, unique: true, default: v4 },
  secret: { type: String, required: true },
  accountId: { type: String, required: true },
  status: { type: Boolean, required: true, default: false },
});
export const verificationModel = mongoose.model("accounts", verificationSchema);
