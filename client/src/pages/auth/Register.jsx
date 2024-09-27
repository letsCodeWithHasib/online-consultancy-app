import React, { useState } from "react";
import { registerUser } from "../../api"; // Adjust the import based on your API function location
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [studentId, setStudentId] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({
        fullName,
        email,
        password,
        phoneNumber,
        studentId,
        resumeUrl,
      });
      alert("Registration successful!");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      alert("Error registering: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <label className="block mb-2">
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block mb-2">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block mb-2">
            Phone Number:
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block mb-2">
            Student ID:
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block mb-4">
            Resume URL:
            <input
              type="text"
              value={resumeUrl}
              onChange={(e) => setResumeUrl(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
