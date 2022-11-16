import React, {useState} from "react";
import "../css/Form.css"


export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  function handleChange(event: any) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    // submitToApi(formData)
    console.log(formData);
  }

  return (
    <div className="Form" id="forms">
      <form onSubmit={handleSubmit}>
        <h2>Forms</h2>

        <div className="form-main">
          <input
            className="form-input"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
          />
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
          <textarea
            className="form-textarea"
            value={formData.comments}
            placeholder="Comments"
            onChange={handleChange}
            name="comments"
          />
        </div>

        <br />

        <fieldset className="form-fieldset">
          <legend className="form-legend">Current employment status</legend>

          <div className="form-radios">
            <div className="radio">
              <label htmlFor="unemployed">Unemployed</label>
              <input
                type="radio"
                id="unemployed"
                name="employment"
                value="unemployed"
                checked={formData.employment === "unemployed"}
                onChange={handleChange}
              />
            </div>

            <div className="radio">
              <label htmlFor="part-time">Part-time</label>
              <input
                type="radio"
                id="part-time"
                name="employment"
                value="part-time"
                checked={formData.employment === "part-time"}
                onChange={handleChange}
              />
            </div>
            <div className="radio">
              <label htmlFor="full-time">Full-time</label>
              <input
                type="radio"
                id="full-time"
                name="employment"
                value="full-time"
                checked={formData.employment === "full-time"}
                onChange={handleChange}
              />
            </div>
          </div>
        </fieldset>
        <br />

        <input
          className="form-checkbox"
          type="checkbox"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
          name="isFriendly"
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
        <br />

        <label htmlFor="favColor">What is your favorite color?</label>
        <br />
        <select
          className="form-select"
          id="favColor"
          onChange={handleChange}
          name="favColor"
          value={formData.favColor}
        >
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <br />
        <br />
        <button className="form-submit">Submit</button>
      </form>
    </div>
  );
}
