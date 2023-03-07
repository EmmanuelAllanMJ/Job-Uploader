import React from "react";
import "./App.css";
import Button from "./components/UI/button";
import Input from "./components/UI/input";
import Label from "./components/UI/label";

function App() {
  return (
    <>
      <Button>New Job</Button>
      <h2>Create a job</h2>
      <h3>Step 3</h3>
      {/* <Input placeholder={"eg UX UI Designer"} /> */}
      <input type="text" placeholder="eg UX UI Designer" />
      <input type="radio" className="" />
    </>
  );
}

export default App;
