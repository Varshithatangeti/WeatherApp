import React from "react";

const Form = (props) => {
  return (
    <form className="form-control" onSubmit={props.getWeather}>
      <input
        type="number"
        min={-90}
        max={90}
        step={0.000001}
        placeholder="Latitude"
        name="latitude"
      />
      <input
        type="number"
        min={-180}
        max={180}
        step={0.000001}
        placeholder="Longitude"
        name="longitude"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
