import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      minlength: [3, "Full name must be at least 3 characters long"],
      maxlength: [50, "Full name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Email is invalid"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\d{10}$/, "Phone number must be a valid 10-digit number"],
    },
    studentId: {
      type: String,
      required: [true, "Student ID is required"],
      unique: true,
    },
    role: {
      type: String,
      enum: ["student", "admin", "hiring manager"],
      required: [true, "Role is required"],
      default: "student",
    },
    resumeUrl: {
      type: String,
      match: [/^https?:\/\/.+\.(pdf|doc|docx)$/, "Resume must be a valid URL"],
    },
    isActive: {
      type: Boolean,
      default: false, // Must be activated by Admin
    },
  },
  { timestamps: true }
);

// Password hashing before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = User || mongoose.model("User", userSchema);
module.exports = User;
