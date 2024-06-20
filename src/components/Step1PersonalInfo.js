import React from 'react';

const Step1PersonalInfo = ({ formData, handleChange }) => (
  <div>
    <h2>Personal Information</h2>
    <form>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
    </form>
  </div>
);

export default Step1PersonalInfo;
