import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema(
  {
    name: String,
    email: String,
    provider: String,
    img: String,
    connection_id: String
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;