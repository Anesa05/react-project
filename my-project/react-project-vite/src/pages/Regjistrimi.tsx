import React, { useState } from "react";
import "./Regjistrimi.css";

interface RegjistrimiForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
}

const Regjistrimi: React.FC = () => {
  const [formData, setFormData] = useState<RegjistrimiForm>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;

    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agree: false,
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="full">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="full">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="full checkbox-row">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <label htmlFor="agree">
              I agree to the terms and conditions.
            </label>
          </div>

          <div className="full actions">
            <button
              type="button"
              className="btn secondary"
              onClick={() => {
                setFormData({
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  agree: false,
                });
                setSubmitted(false);
              }}
            >
              Clear
            </button>
            <button type="submit" className="btn">
              Register
            </button>
          </div>

          {submitted && (
            <div className="success">
              Registration successful! You can now log in.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Regjistrimi;
