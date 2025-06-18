import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/BStudyTheme.css';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: LoginFormData) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    try {
      // TODO: Implement actual login logic here
      console.log('Login attempt with:', formData);
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-secondary">
      <div className="card max-w-md w-full p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary-color mb-2">Welcome to BStudy</h1>
          <p className="text-text-secondary">Sign in to access your courses</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-error-color bg-opacity-10 text-error-color rounded-md">
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary w-full mb-4">
            Sign In
          </button>

          <div className="flex justify-between text-sm">
            <Link to="/forgot-password" className="text-primary-color hover:text-primary-dark">
              Forgot Password?
            </Link>
            <Link to="/register" className="text-primary-color hover:text-primary-dark">
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage; 