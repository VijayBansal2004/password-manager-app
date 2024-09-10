import "./App.css";
import Heading from "./components/Heading";
import InputForm from "./components/InputForm";
import DisplayTabel from "./components/DisplayTabel";
import { useState, useEffect, useRef } from "react";

function App() {
  const [details, setDetails] = useState(() => {
    const storedDetails = localStorage.getItem("details");
    return storedDetails ? JSON.parse(storedDetails) : [];
  });
  const webURL = useRef();
  const username = useRef();
  const password = useRef();

  // const [inputData, setInputData] = useState();

  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(details));
  }, [details]);

  const onHandleSubmit = (e, URL, name, pass) => {
    e.preventDefault();
    if (URL.current.value && name.current.value && pass.current.value) {
      const userDetails = [
        ...details,
        {
          id: Date.now(),
          webURL: URL.current.value,
          userName: name.current.value,
          password: pass.current.value,
        },
      ];
      setDetails(userDetails);
      URL.current.value = "";
      name.current.value = "";
      pass.current.value = "";
    }
  };

  const onHandleDelete = (URL) => {
    const newDetailList = details.filter((i) => {
      return i.webURL != URL;
    });
    setDetails(newDetailList);
  };

  const handleEdit = (id, url, name, pass, isEditable, setIsEditable) => {
    setDetails(details.map((detail) => (
      detail.id === id ? { ...detail, webURL: url, userName: name, password: pass } : detail
    )));
    setIsEditable(!isEditable);
  }

  // const onHandleEdit = (URL, name, pass) => {
  //   console.log(URL, name, pass);
  //   const newArr = [
  //     {
  //       webURL: URL,
  //       userName: name,
  //       password: pass,
  //     },
  //   ];
  //   setInputData(newArr);
  //   // console.log(inputData.webURL);
  // };
  return (
    <>
      <div className="container vh-100 align-content-center">
        <div className="backgound-container">
          <Heading />
          <InputForm
            onHandleSubmit={onHandleSubmit}
            webURL={webURL}
            username={username}
            password={password}
          />
          <DisplayTabel
            details={details}
            onHandleDelete={onHandleDelete}
            handleEdit={handleEdit}
            webURL={webURL}
            username={username}
            password={password}
          // onHandleEdit={onHandleEdit}
          />
        </div>
      </div>
    </>
  );
}

export default App;
