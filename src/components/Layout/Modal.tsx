import React, { useState } from "react";
import Button from "../UI/button";
import Label from "../UI/label";
import Card from "./Card";
import Wrapper from "./Wrapper";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [next, setNext] = useState(false);

  const saveModal = () => {
    setShowModal(false);
    setNext(false);
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)}>New Job</Button>
      {showModal && !next ? (
        <>
          <Card>
            <Wrapper className="pb-6">
              <h2>Create a job</h2>
              <h3>Step 1</h3>
            </Wrapper>
            <Label mandatory={true}>Job Title</Label>
            <input placeholder="ex: UI UX Designer" />
            <Label mandatory={true}>Company Name</Label>
            <input placeholder="ex: Google" />
            <Label mandatory={true}>Industry</Label>
            <input placeholder="ex: Information Technology" />
            <div className="flex justify-between items-center gap-5">
              <div>
                <Label>Location</Label>
                <input placeholder="ex: Chennai" />
              </div>
              <div>
                <Label>Remote type</Label>
                <input placeholder="ex: in-office" />
              </div>
            </div>
            <div className="flex items-center justify-end pt-24   rounded-b">
              <Button onClick={() => setNext(true)}>Next</Button>
            </div>
          </Card>
        </>
      ) : null}
      {showModal && next ? (
        <Card>
          <Wrapper className="pb-6">
            <h2>Create a job</h2>
            <h3>Step 2</h3>
          </Wrapper>
          <Label>Experience</Label>
          <Wrapper className={"gap-5"}>
            <input placeholder="Minimum" />
            <input placeholder="Maximum" />
          </Wrapper>
          <Label>Salary</Label>
          <Wrapper className={"gap-5"}>
            <input placeholder="Minimum" />
            <input placeholder="Maximum" />
          </Wrapper>
          <Label>Total Employee</Label>
          <input placeholder="ex: Google" />
          <Label>Apply type</Label>
          <input type="radio" />
          <input type="radio" />

          <div className="flex items-center justify-end pt-24   rounded-b">
            <Button onClick={saveModal}>Save</Button>
          </div>
        </Card>
      ) : null}
    </>
  );
}
