import React from 'react';

const Step3Confirmation = ({ formData }) => (
  <div>
    <h2>Confirmation</h2>
    <ul className="list-group">
      <li className="list-group-item">Name: {formData.name}</li>
      <li className="list-group-item">Email: {formData.email}</li>
      <li className="list-group-item">Phone: {formData.phone}</li>
      <li className="list-group-item">Address Line 1: {formData.address1}</li>
      <li className="list-group-item">Address Line 2: {formData.address2}</li>
      <li className="list-group-item">City: {formData.city}</li>
      <li className="list-group-item">State: {formData.state}</li>
      <li className="list-group-item">Zip Code: {formData.zip}</li>
    </ul>
  </div>
);

export default Step3Confirmation;
