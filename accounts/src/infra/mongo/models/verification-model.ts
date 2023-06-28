import mongoose from "mongoose";
import { v4 } from "uuid";
const verificationSchema = new mongoose.Schema({
  _id: { type: String, required: true, unique: true, default: v4 },
  secret: { type: String, required: true },
  accountId: { type: String, required: true },
  status: { type: Boolean, required: true, default: false },
  account: { type: String, ref: "accounts" },
});
verificationSchema.pre("save", function (next) {
  this.account = this.accountId;
  next();
});

export const verificationModel = mongoose.model(
  "verifications",
  verificationSchema
);
