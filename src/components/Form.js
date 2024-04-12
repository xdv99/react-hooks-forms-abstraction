import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henrey",
    admin: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        value={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
