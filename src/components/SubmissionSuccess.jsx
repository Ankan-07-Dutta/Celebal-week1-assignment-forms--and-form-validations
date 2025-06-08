import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SubmissionSuccess.css';
import BGimg from "../assets/images/SuccessPageBG.jpg"

const SubmissionSuccess = () => {
  const navigate = useNavigate();
  const formData = JSON.parse(localStorage.getItem('formData'));

  const handleGoBack = () => {
    localStorage.removeItem('formData');
    navigate('/');
  };

  if (!formData) {
    return (
      <>
        <div className="success-container"
        style={{
              backgroundImage: `url(${BGimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}>
            <div className='main-form bg-amber-200 p-10 m-10 mx-auto w-[700px] rounded-2xl shadow-amber-100'>
                <h2>No submission data found</h2>
                <button onClick={handleGoBack}>Go Back to Form</button>
            </div> 
        
      </div>

      </>
      
    );
  }

  return (
    <div className="success-container"
    style={{
              backgroundImage: `url(${BGimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}>
              <div>
                  <h1 className=' text-green-500 font-extrabold text-3xl'>Submission Successful!</h1>
                    <div className="details-container bg-amber-200 p-10 m-10 w-[700px] rounded-2xl">
                      <h2>User Details</h2>
                      <p><strong>First Name:</strong> {formData.firstName}</p>
                      <p><strong>Last Name:</strong> {formData.lastName}</p>
                      <p><strong>Username:</strong> {formData.username}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Phone:</strong> {formData.phoneCode} {formData.phoneNumber}</p>
                      <p><strong>Country:</strong> {formData.country}</p>
                      <p><strong>City:</strong> {formData.city}</p>
                      <p><strong>PAN Number:</strong> {formData.panNo}</p>
                      <p><strong>Aadhar Number:</strong> {formData.aadharNo}</p>
                    </div>
                    <button onClick={handleGoBack}>Submit Another Form</button>
              </div>
          
      
    </div>
  );
};

export default SubmissionSuccess;