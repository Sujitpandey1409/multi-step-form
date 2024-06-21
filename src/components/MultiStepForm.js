import React, { useState, useEffect } from 'react';
import Step1PersonalInfo from './Step1PersonalInfo';
import Step2AddressInfo from './Step2AddressInfo';
import Step3Confirmation from './Step3Confirmation';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationErrors({ ...validationErrors, [e.target.name]: '' });
  };

  const validateStep = (step) => {
    let errors = {};
    if (step === 1) {
      if (!formData.name) errors.name = 'Name is required';
      if (!formData.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email address is invalid';
      }
      if (!formData.phone) errors.phone = 'Phone is required';
    } else if (step === 2) {
      if (!formData.address1) errors.address1 = 'Address Line 1 is required';
      if (!formData.city) errors.city = 'City is required';
      if (!formData.state) errors.state = 'State is required';
      if (!formData.zip) {
        errors.zip = 'Zip Code is required';
      } else if (!/^\d{5}(-\d{4})?$/.test(formData.zip)) {
        errors.zip = 'Zip Code is invalid';
      }
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="container mt-5">
      <div className="steps">
        {step === 1 && <Step1PersonalInfo formData={formData} handleChange={handleChange} validationErrors={validationErrors} />}
        {step === 2 && <Step2AddressInfo formData={formData} handleChange={handleChange} validationErrors={validationErrors} />}
        {step === 3 && <Step3Confirmation formData={formData} />}
      </div>
      <div className="buttons mt-3">
        {step > 1 && <button className="btn btn-secondary me-2" onClick={handleBack}>Back</button>}
        {step < 3 && <button className= "btn btn-primary"   onClick={handleNext}>Next</button>}
        {step === 3 && <button className="btn btn-success">Submit</button>}
      </div>
    </div>
  );
};

export default MultiStepForm;
