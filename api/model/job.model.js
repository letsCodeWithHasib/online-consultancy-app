import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: [true, "Job title is required"],
      minlength: [5, "Job title must be at least 5 characters long"],
      maxlength: [100, "Job title cannot exceed 100 characters"],
    },
    jobDescription: {
      type: String,
      required: [true, "Job description is required"],
      minlength: [20, "Job description must be at least 20 characters long"],
    },
    skillsRequired: {
      type: [String],
      required: [true, "At least one skill is required"],
      validate: {
        validator: (skills) => skills.length > 0,
        message: "There must be at least one required skill",
      },
    },
    salaryRange: {
      type: String,
      required: [true, "Salary range is required"],
      match: [/^\d+-\d+$/, 'Salary range must be in the format "min-max"'],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to Hiring Manager
      required: true,
    },
    applicationDeadline: {
      type: Date,
      required: [true, "Application deadline is required"],
      validate: {
        validator: function (value) {
          return value > Date.now();
        },
        message: "Deadline must be in the future",
      },
    },
    numberOfOpenings: {
      type: Number,
      required: [true, "Number of openings is required"],
      min: [1, "There must be at least 1 opening"],
      validate: {
        validator: Number.isInteger,
        message: "Number of openings must be an integer",
      },
    },
  },
  { timestamps: true }
);

const Job = Job || mongoose.model("Job", jobSchema);
module.exports = Job;
