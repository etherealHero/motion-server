import { model, Schema } from "mongoose"

const Category = new Schema({
  title: { type: String, required: true },
  color: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
})

export default model("Category", Category)
