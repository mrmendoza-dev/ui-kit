import React, {useState} from "react";
import "../css/Form.css"
import { nanoid } from "nanoid";
import html2canvas from "html2canvas";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",

    fileType: "png",
    clrAccent: "#000000",
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

   function saveImg() {
     html2canvas(document.getElementById("capture") as HTMLCanvasElement, {
       allowTaint: true,
       useCORS: true,
     }).then(function (canvas: any) {
       var anchorTag = document.createElement("a");
       document.body.appendChild(anchorTag);
       //  document.getElementById("previewImg").appendChild(canvas);
       anchorTag.download = `img.${formData.fileType}`;
       anchorTag.href = canvas.toDataURL();
       anchorTag.target = "_blank";
       anchorTag.click();
     });
   }

   let choices = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]

  return (
    <div className="Form" id="forms">

      <div className="form-display">
      </div>
      
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
          {choices.map((choice: any) => {
            return (
              <option key={nanoid()} value={choice}>
                {choice}
              </option>
            );
          })}
        </select>
        <br />
        <div className="form-row">
          <p className="form-label">Import Image</p>
          <input
            className="form-input"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <p className="form-label">File Type</p>
          <select
            className="form-select"
            onChange={handleChange}
            name="fileType"
            value={formData.fileType}
          >
            <option value="png">.png</option>
            <option value="jpg">.jpg</option>
            <option value="webp">.webp</option>
          </select>
        </div>
        <button className="form-btn" onClick={saveImg}>
          Download File
        </button>
        <div className="form-row">
          <p className="form-label">Background</p>
          <input
            name="clrAccent"
            type="color"
            className="color-picker"
            onChange={handleChange}
            value={formData.clrAccent}
          />
          <input
            className="form-input"
            type="text"
            onChange={handleChange}
            name="clrAccent"
            placeholder="#000000"
            value={formData.clrAccent}
          />
        </div>

        <button className="form-submit">Submit</button>
      </form>
    </div>
  );
}
