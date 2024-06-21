import React from 'react';

const Step1PersonalInfo = ({ formData, handleChange, validationErrors }) => (
  <div>
    <h2>Personal Information</h2>
    <form>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {validationErrors.name && <div className="invalid-feedback">{validationErrors.name}</div>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {validationErrors.email && <div className="invalid-feedback">{validationErrors.email}</div>}
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          className={`form-control ${validationErrors.phone ? 'is-invalid' : ''}`}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {validationErrors.phone && <div className="invalid-feedback">{validationErrors.phone}</div>}
      </div>
    </form>
  </div>
);

export default Step1PersonalInfo;
