import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: [true, "Job ID is required"],
    },
    applicantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Applicant ID is required"],
    },
    applicationStatus: {
      type: String,
      enum: ["applied", "under_review", "shortlisted", "rejected"],
      default: "applied",
    },
    resumeUrl: {
      type: String,
      required: [true, "Resume is required"],
      match: [/^https?:\/\/.+\.(pdf|doc|docx)$/, "Resume must be a valid URL"],
    },
  },
  { timestamps: true }
);

const Application =
  Application || mongoose.model("Application", applicationSchema);
module.exports = Application;
