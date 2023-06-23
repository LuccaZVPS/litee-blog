import mongoose from "mongoose";
import { v4 } from "uuid";
const categorySchema = new mongoose.Schema({
  _id: { type: String, required: true, unique: true, default: v4 },
  title: { type: String, required: true, unique: true },
  imageName: { type: String, required: true },
  imagePath: { type: String, required: true },
});
export const categoryModel = mongoose.model("categories", categorySchema);
