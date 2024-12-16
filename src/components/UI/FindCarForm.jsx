import React, { useState } from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(null);

  const handleMinPriceChange = (e) => {
    const value = Math.max(0, e.target.value);
    setMinPrice(value);
    if (maxPrice !== null && value > maxPrice) {
      setMaxPrice(value);
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = Math.max(0, e.target.value);
    setMaxPrice(value);
    if (value < minPrice) {
      setMinPrice(value);
    }
  };

  return (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Name" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Model"  />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Location" required  />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="City"  />
        </FormGroup>

        <FormGroup className="form__group">
          <div className="d-flex align-items-center">
            <input
              type="number"
              placeholder="Min Price"
              className="mr-2"
              min="0"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <span className="mx-2">-</span>
            <input
              type="number"
              placeholder="Max Price"
              min="0"
              value={maxPrice !== null ? maxPrice : ''}
              onChange={handleMaxPriceChange}
            />
          </div>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;