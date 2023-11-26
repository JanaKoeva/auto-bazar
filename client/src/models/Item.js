import { Schema, model } from "mongoose";

const itemSchema = new Schema({
  name: String,
  description: String,
  price:Number,
  img:{
    data: 'Buffer',
    contentType: String
},
owner:Object,
});

export default model("Item", itemSchema);