import React from "react";
import ExampleComponent from "./ExampleComponent";
export default {
  component: ExampleComponent,
  title: "Components/ExampleComponent",
};
const Template = (args) => <ExampleComponent {...args} />;
export const Default = Template.bind({});
Default.args = {
  someProp: "Something",
  someOtherProp: 33,
};
