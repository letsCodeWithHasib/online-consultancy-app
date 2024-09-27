const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
    required: [true, "Test ID is required"],
  },
  applicantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Applicant ID is required"],
  },
  answers: {
    type: [String],
    required: [true, "Answers are required"],
    validate: {
      validator: (answers) => answers.length > 0,
      message: "There must be at least one answer",
    },
  },
  score: {
    type: Number,
    min: [0, "Score must be at least 0"],
    max: [100, "Score cannot exceed 100"],
    default: null, // Assigned after manual/automatic review
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

// Create the Submission model
const Submission =
  Submission || mongoose.model("TestSubmission", submissionSchema);

// Export the model
module.exports = Submission;
