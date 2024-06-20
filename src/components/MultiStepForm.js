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
  };

  const validateStep = (step) => {
    // Implement validation logic
    return true;
  };

  return (
    <div className="container mt-5">
      <div className="steps">
        {step === 1 && <Step1PersonalInfo formData={formData} handleChange={handleChange} />}
        {step === 2 && <Step2AddressInfo formData={formData} handleChange={handleChange} />}
        {step === 3 && <Step3Confirmation formData={formData} />}
      </div>
      <div className="buttons mt-3">
        {step > 1 && <button className="btn btn-secondary" onClick={handleBack}>Back</button>}
        {step < 3 && <button className="btn btn-primary" onClick={handleNext}>Next</button>}
        {step === 3 && <button className="btn btn-success">Submit</button>}
      </div>
    </div>
  );
};

export default MultiStepForm;
