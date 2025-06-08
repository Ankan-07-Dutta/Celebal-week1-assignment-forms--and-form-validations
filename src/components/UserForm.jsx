import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserForm.css';
import BgImg from '../assets/images/FormBG.jpeg';

const UserForm = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneCode: '+91',
    phoneNumber: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  // Error state
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  // City options based on country
  const cityOptions = {
    'USA': ['New York', 'Los Angeles', 'Chicago'],
    'India': ['Kolkata','Mumbai', 'Delhi', 'Bangalore'],
    'UK': ['London', 'Manchester', 'Birmingham'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal']
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword
    });
  };

  // Validate form
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
      valid = false;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
      valid = false;
    }

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    } else if (formData.username.length < 4) {
      newErrors.username = 'Username must be at least 4 characters';
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    // Phone Number validation
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must be 10 digits';
      valid = false;
    }

    // Country validation
    if (!formData.country) {
      newErrors.country = 'Country is required';
      valid = false;
    }

    // City validation
    if (!formData.city) {
      newErrors.city = 'City is required';
      valid = false;
    }

    // PAN validation
    if (!formData.panNo.trim()) {
      newErrors.panNo = 'PAN Number is required';
      valid = false;
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNo)) {
      newErrors.panNo = 'PAN Number is invalid';
      valid = false;
    }

    // Aadhar validation
    if (!formData.aadharNo.trim()) {
      newErrors.aadharNo = 'Aadhar Number is required';
      valid = false;
    } else if (!/^\d{12}$/.test(formData.aadharNo)) {
      newErrors.aadharNo = 'Aadhar Number must be 12 digits';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Store form data in localStorage to access on success page
      localStorage.setItem('formData', JSON.stringify(formData));
      navigate('/success');
    }
  };

  // Check if form is valid for submit button
  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.username &&
      formData.email &&
      formData.password &&
      formData.phoneNumber &&
      formData.country &&
      formData.city &&
      formData.panNo &&
      formData.aadharNo &&
      Object.values(errors).every(error => !error)
    );
  };

  return (
    <div className="form-container"
    style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
      <div className='main-form bg-amber-200 p-10 m-10 mx w-[700px] rounded-2xl shadow-amber-100'>
          <h1 className=" text-3xl m-2 text-center font-extrabold text-blue-600 underline">
              User Registration
          </h1>  
      <form onSubmit={handleSubmit}>
        {/* First Name */}
                
          <div className="form-group">
          <label>First Name<span className=' text-red-500'>*</span></label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'error' : '' }
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label>Last Name<span className=' text-red-500'>*</span></label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'error' : ''}
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>

        {/* Username */}
        <div className="form-group">
          <label>Username<span className=' text-red-500'>*</span></label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? 'error' : ''}
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email<span className=' text-red-500'>*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Password */}
        <div className="form-group password-container">
          <label>Password<span className=' text-red-500'>*</span></label>
          <div className="password-input">
            <input
              type={formData.showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className={errors.password ? 'error' : ''}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="toggle-password"
            >
              {formData.showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label>Phone Number<span className=' text-red-500'>*</span></label>
          <div className="phone-input">
            <select
              name="phoneCode"
              value={formData.phoneCode}
              onChange={handleChange}
            >
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (Australia)</option>
            </select>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
              className={errors.phoneNumber ? 'error' : ''}
            />
          </div>
          {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
        </div>

        {/* Country */}
        <div className="form-group">
          <label>Country<span className=' text-red-500'>*</span></label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={errors.country ? 'error' : ''}
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
          </select>
          {errors.country && <span className="error-message">{errors.country}</span>}
        </div>

        {/* City */}
        <div className="form-group">
          <label>City<span className=' text-red-500'>*</span></label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            disabled={!formData.country}
            className={errors.city ? 'error' : ''}
          >
            <option value="">Select City</option>
            {formData.country && 
              cityOptions[formData.country].map(city => (
                <option key={city} value={city}>{city}</option>
              ))
            }
          </select>
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>

        {/* PAN Number */}
        <div className="form-group">
          <label>PAN Number<span className=' text-red-500'>*</span></label>
          <input
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
            placeholder="ABCDE1234F"
            className={errors.panNo ? 'error' : ''}
          />
          {errors.panNo && <span className="error-message">{errors.panNo}</span>}
        </div>

        {/* Aadhar Number */}
        <div className="form-group">
          <label>Aadhar Number<span className=' text-red-500'>*</span></label>
          <input
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
            placeholder="123456789012"
            className={errors.aadharNo ? 'error' : ''}
          />
          {errors.aadharNo && <span className="error-message">{errors.aadharNo}</span>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid()}
          className={!isFormValid() ? 'disabled' : ''}
        >
          Submit
        </button>
      </form>
      </div>
      
    </div>
  );
};

export default UserForm;