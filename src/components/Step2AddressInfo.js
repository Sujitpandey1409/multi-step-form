import React from 'react';

const Step2AddressInfo = ({ formData, handleChange, validationErrors }) => (
  <div>
    <h2>Address Information</h2>
    <form>
      <div className="form-group">
        <label>Address Line 1</label>
        <input
          type="text"
          className={`form-control ${validationErrors.address1 ? 'is-invalid' : ''}`}
          name="address1"
          value={formData.address1}
          onChange={handleChange}
        />
        {validationErrors.address1 && <div className="invalid-feedback">{validationErrors.address1}</div>}
      </div>
      <div className="form-group">
        <label>Address Line 2</label>
        <input
          type="text"
          className="form-control"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          className={`form-control ${validationErrors.city ? 'is-invalid' : ''}`}
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        {validationErrors.city && <div className="invalid-feedback">{validationErrors.city}</div>}
      </div>
      <div className="form-group">
        <label>State</label>
        <input
          type="text"
          className={`form-control ${validationErrors.state ? 'is-invalid' : ''}`}
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
        {validationErrors.state && <div className="invalid-feedback">{validationErrors.state}</div>}
      </div>
      <div className="form-group">
        <label>Zip Code</label>
        <input
          type="text"
          className={`form-control ${validationErrors.zip ? 'is-invalid' : ''}`}
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
        {validationErrors.zip && <div className="invalid-feedback">{validationErrors.zip}</div>}
      </div>
    </form>
  </div>
);

export default Step2AddressInfo;
