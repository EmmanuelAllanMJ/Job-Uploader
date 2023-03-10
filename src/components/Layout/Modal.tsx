import { useState } from "react";
import Button from "../UI/button";
import Label from "../UI/label";
import Card from "./modalCard";
import Wrapper from "./Wrapper";
import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
type SelectProps = {
  title: string;
  companyName: string;
  industry: string;
  location?: string;
  remoteType?: string;
  expMin?: number;
  expMax?: number;
  totalEmp?: string;
  applyType?: string | null;
  salaryMin?: number;
  salaryMax?: number;
  quick?: boolean | null;
  id: string;
};

type ErrorProps = {
  title: boolean;
  companyName: boolean;
  industry: boolean;
  onActive: boolean;
};

var newPostObj = {
  title: "",
  companyName: "",
  industry: "",
  location: "",
  remoteType: "",
  expMin: -1,
  expMax: -1,
  totalEmp: "",
  applyType: null,
  salaryMin: -1,
  salaryMax: -1,
  quick: null,
  id: "",
};

function Modal() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(false);
  const [nextError, setNextError] = useState(false);
  const [newPost, setNewPost] = useState<SelectProps>(newPostObj);

  console.log(newPostObj);
  const [error, setError] = useState<ErrorProps>({
    title: false,
    companyName: false,
    industry: false,
    onActive: true,
  });

  const nextModal = () => {
    var result = true;

    for (var i in error) {
      if (error[i as keyof ErrorProps] === true) {
        result = false;
        break;
      }
    }
    if (result) {
      setNextError(false);
      setNext(false);
    } else {
      setNextError(true);
    }
  };
  const saveModal = () => {
    setShowModal(false);
    setNext(false);
    createPost();
  };
  function createPost() {
    axios
      .post(`${baseURL}/tasks`, newPost)
      .then((response) => {
        console.log(response);
        // setPost();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function onErrorHandler(e: { target: { value: any } }, field: string) {
    const value = e.target.value;
    error.onActive = false;
    if (value === "") {
      setError((err) => {
        return {
          ...err,
          [field]: true,
        };
      });
      console.log("first");
    } else {
      setError((err) => {
        return {
          ...err,
          [field]: false,
        };
      });
    }
    setNewPost((post) => {
      return { ...post, title: e.target.value };
    });
  }

  return (
    <>
      <div className="flex justify-center items-center p-8">
        <Button onClick={() => setShowModal(true)}>New Job</Button>
      </div>
      {showModal && !next ? (
        <>
          <Card>
            <Wrapper className="pb-6">
              <h2>Create a job</h2>
              <h3>Step 1</h3>
            </Wrapper>
            <Label mandatory={true}>Job Title</Label>
            {error.title && (
              <p className="text-alert">This field is required</p>
            )}
            <input
              className={error.title ? "border-2 border-alert " : ""}
              placeholder="ex: UI UX Designer"
              value={newPost.title}
              onChange={(event) => onErrorHandler(event, "title")}
              onBlur={(event) => onErrorHandler(event, "title")}
            />
            <Label mandatory={true}>Company Name</Label>
            {error.companyName && (
              <p className="text-alert">This field is required</p>
            )}
            <input
              className={error.companyName ? "border-2 border-alert " : ""}
              placeholder="ex: Google"
              value={newPost.companyName}
              onChange={(event) => onErrorHandler(event, "companyName")}
              onBlur={(event) => onErrorHandler(event, "companyName")}
            />
            <Label mandatory={true}>Industry</Label>
            {error.industry && (
              <p className="text-alert">This field is required</p>
            )}
            <input
              className={error.industry ? "border-2 border-alert " : ""}
              placeholder="ex: Information Technology"
              value={newPost.industry}
              onChange={(event) => onErrorHandler(event, "industry")}
              onBlur={(event) => onErrorHandler(event, "industry")}
            />
            <div className="flex justify-between items-center gap-5">
              <div>
                <Label>Location</Label>
                <input
                  placeholder="ex: Chennai"
                  value={newPost.location}
                  onChange={(e) =>
                    setNewPost((post) => {
                      return { ...post, location: e.target.value };
                    })
                  }
                />
              </div>
              <div>
                <Label>Remote type</Label>
                <input
                  placeholder="ex: in-office"
                  value={newPost.remoteType}
                  onChange={(e) =>
                    setNewPost((post) => {
                      return { ...post, remoteType: e.target.value };
                    })
                  }
                />
              </div>
            </div>
            {nextError && (
              <p className="text-alert">Full all the required fields</p>
            )}
            <div className="flex items-center justify-end pt-24   rounded-b">
              <Button onClick={() => nextModal()}>Next</Button>
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
            <input
              placeholder="Minimum"
              value={newPost.expMin === -1 ? "" : newPost.expMin}
              onChange={(e) =>
                setNewPost((post) => {
                  return { ...post, expMin: +e.target.value };
                })
              }
            />
            <input
              placeholder="Maximum"
              value={newPost.expMax === -1 ? "" : newPost.expMax}
              onChange={(e) =>
                setNewPost((post) => {
                  return { ...post, expMax: +e.target.value };
                })
              }
            />
          </Wrapper>
          <Label>Salary</Label>
          <Wrapper className={"gap-5"}>
            <input
              placeholder="Minimum"
              value={newPost.salaryMin === -1 ? "" : newPost.salaryMin}
              onChange={(e) =>
                setNewPost((post) => {
                  return { ...post, salaryMin: +e.target.value };
                })
              }
            />
            <input
              placeholder="Maximum"
              value={newPost.salaryMax === -1 ? "" : newPost.salaryMin}
              onChange={(e) =>
                setNewPost((post) => {
                  return { ...post, salaryMax: +e.target.value };
                })
              }
            />
          </Wrapper>
          <Label>Total Employee</Label>
          <input
            placeholder="ex: Google"
            value={newPost.totalEmp}
            onChange={(e) =>
              setNewPost((post) => {
                return { ...post, totalEmp: e.target.value };
              })
            }
          />
          <Label>Apply type</Label>
          <div className="flex justify-start gap-4 ">
            <Wrapper className="gap-1">
              <input
                type="radio"
                value="quick"
                name="apply"
                onChange={(e) =>
                  setNewPost((post) => {
                    return { ...post, applyType: e.target.value };
                  })
                }
              />

              <p>Quick Apply</p>
            </Wrapper>
            <Wrapper className="gap-1">
              <input
                type="radio"
                name="apply"
                value="external"
                onChange={(e) =>
                  setNewPost((post) => {
                    return { ...post, applyType: e.target.value };
                  })
                }
              />
              <p>External Apply</p>
            </Wrapper>
          </div>

          <div className="flex items-center justify-end pt-24   rounded-b">
            <Button onClick={saveModal}>Save</Button>
          </div>
        </Card>
      ) : null}
    </>
  );
}

export default Modal;
