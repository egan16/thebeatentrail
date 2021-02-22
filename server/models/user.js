import mongoose from 'mongoose';

//create mongoose schema for trips
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String } 
});

// //turn schema into a model
// const User = mongoose.model('User', userSchema)

// export default User;
export default mongoose.model("User", userSchema);