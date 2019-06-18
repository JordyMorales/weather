import React, { useState } from "react";

const Form = ({ dataSearch }) => {
  // State of Component
  // search = state and saveSearch= this.setState({})
  const [search, saveSearch] = useState({
    city: "",
    country: ""
  });

  const handleChange = async e => {
    //change state
    await saveSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const checkWeather = e => {
    e.preventDefault();    
    dataSearch(search);
  };

  return (
    <form onSubmit={checkWeather}>
      <div className="input-field col s12">
        <label htmlFor="city">City: </label>
        <input type="text" name="city" id="city" onChange={handleChange} />
      </div>
      <div className="input-field col s12">
        <select onChange={handleChange} name="country">
          <option value="">Select a Country</option>
          <option value="US">Estados Unidos</option>
          <option value="BO">Plurinational State of Bolivia</option>
          <option value="MX">Mexico</option>
          <option value="AR">Argetina</option>
          <option value="CO">Colombia</option>
          <option value="ES">España</option>
          <option value="PE">Peru</option>
        </select>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
          value="Search weather"
        />
      </div>
    </form>
  );
};

export default Form;
