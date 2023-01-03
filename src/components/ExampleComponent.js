import React from "react";
import PropTypes from "prop-types";
export default function ExampleComponent({ someProp, someOtherProp }) {
  return (
    <div>
      <h1>I'm a example component with the following props and values</h1>
      <p>someProp: {someProp}</p>
      <p>someProp: {someOtherProp}</p>
    </div>
  );
}

ExampleComponent.propTypes = {
  someProp: PropTypes.string,
  someOtherProp: PropTypes.number,
};
