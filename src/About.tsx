import React, { ChangeEvent, useState } from "react";
import useInputChange from "./useInputChange";

const About = () => {
  const { value: fullname, handleInputChange } = useInputChange("tuantran");
  // const [fullname, setFullName] = useState("");
  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setFullName(e.target.value);
  // };
  return (
    <div>
      <input type="text" name="fullname" onChange={handleInputChange} />
    </div>
  );
};

export default About;
