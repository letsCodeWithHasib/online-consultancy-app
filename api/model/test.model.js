import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: [true, "Job ID is required"],
  },
  testType: {
    type: String,
    enum: ["multiple_choice", "coding", "essay"],
    required: [true, "Test type is required"],
  },
  questions: {
    type: [String],
    required: [true, "Questions are required"],
    validate: {
      validator: (questions) => questions.length > 0,
      message: "There must be at least one question",
    },
  },
  passingCriteria: {
    type: Number,
    required: [true, "Passing criteria is required"],
    min: [0, "Passing criteria must be at least 0"],
    max: [100, "Passing criteria cannot exceed 100"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Test = Test || mongoose.model("Test", testSchema);
module.exports = Test;
