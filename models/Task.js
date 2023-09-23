import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  status:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now,
    required: true
  }
});

model.exports = mongoose.model('user',userSchema);