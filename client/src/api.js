import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Adjust based on your server setup
});

// User registration
export const registerUser = async (userData) => {
  return await api.post("/users/register", userData);
};

// User login
export const loginUser = async (credentials) => {
  return await api.post("/users/login", credentials);
};

// Post job
export const postJob = async (jobData) => {
  return await api.post("/jobs", jobData);
};

// Get jobs
export const getJobs = async () => {
  return await api.get("/jobs");
};

// Submit test
export const submitTest = async (submissionData) => {
  return await api.post("/test-submissions", submissionData);
};
