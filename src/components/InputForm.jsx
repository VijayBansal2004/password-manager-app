import { SlPlus } from "react-icons/sl";
const InputForm = ({ onHandleSubmit, webURL, username, password }) => {
  return (
    <form
      className="col-12 col-md-10 col-lg-6 m-auto"
      onSubmit={(e) => {
        onHandleSubmit(e, webURL, username, password);
      }}
    >
      <div className="row mb-3">
        <label htmlFor="inputurl1" className="col-sm-2 col-form-label">
          Web URL
        </label>
        <div className="col-sm-10">
          <input
            type="url"
            className="form-control"
            id="inputurl1"
            placeholder="Enter Website URL"
            ref={webURL}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="username" className="col-sm-2 col-form-label">
          Username
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter Username"
            ref={username}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassword3"
            placeholder="Enter Password"
            ref={password}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Save <SlPlus />
      </button>
    </form>
  );
};

export default InputForm;
