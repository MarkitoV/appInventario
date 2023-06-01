import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  userName: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  }
});

export default model('User', userSchema);