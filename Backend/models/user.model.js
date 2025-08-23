import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  collegeName: { type: String, required: true },
  degree: { type: String, required: true },
  startYear: { type: Number, required: true },
  endYear: { type: Number },
});

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  linkedinUrl: { type: String },
  education: [educationSchema],
  experience: {
    company: [{ type: String }],
  },

  skilledIn: { type: [String], default: [] },
  skillWant: { type: [String], default: [] },

});

const User = mongoose.model("User", userSchema);

export default User;