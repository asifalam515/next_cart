import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    _id: { type: String, require: true },
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    imageUrl: { type: String, require: true },
    cartItem: { type: Object, default: {} },
  },
  { minimize: false }
);
