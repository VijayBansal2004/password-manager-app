import "./App.css";
import Heading from "./components/Heading";
import InputForm from "./components/InputForm";
import DisplayTabel from "./components/DisplayTabel";
import { useState, useEffect, useRef } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [details, setDetails] = useState(() => {
    const storedDetails = localStorage.getItem("details");
    return storedDetails ? JSON.parse(storedDetails) : [];
  });

  const webURL = useRef();
  const username = useRef();
  const password = useRef();

  const [searchedURL, setSearchedURL] = useState([]);


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
  };

  const handleSearch = (searchedWord) => {
    // console.log(searchedWord.length);
    if (searchedWord.length <= 1) {
      setSearchedURL([]);
    }
    else {
      const arr = details.filter((detail) => (detail.webURL.toLowerCase().includes(searchedWord.toLowerCase())));
      setSearchedURL([...arr]);
    }
  }

  const handleCancleSearch = () => {
    setSearchedURL([]);
  }

  useEffect(() => {
    console.log(searchedURL);
  }, [searchedURL]);


  return (
    <>
      <div className="container vh-100 align-content-center">
        <div className="backgound-container">
          <Heading />
          <SearchBar handleSearch={handleSearch} searchedURL={searchedURL} handleCancleSearch={handleCancleSearch} />
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
          />
        </div>
      </div>
    </>
  );
}

export default App;
