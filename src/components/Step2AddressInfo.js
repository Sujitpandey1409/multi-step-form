import React from 'react';

const Step2AddressInfo = ({ formData, handleChange }) => (
  <div>
    <h2>Address Information</h2>
    <form>
      <div className="form-group">
        <label>Address Line 1</label>
        <input type="text" className="form-control" name="address1" value={formData.address1} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Address Line 2</label>
        <input type="text" className="form-control" name="address2" value={formData.address2} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>City</label>
        <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>State</label>
        <input type="text" className="form-control" name="state" value={formData.state} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Zip Code</label>
        <input type="text" className="form-control" name="zip" value={formData.zip} onChange={handleChange} />
      </div>
    </form>
  </div>
);

export default Step2AddressInfo;
