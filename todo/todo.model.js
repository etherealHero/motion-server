import { model, Schema } from "mongoose"

const Todo = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  checked: { type: Boolean, default: false },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
})

export default model("Todo", Todo)
