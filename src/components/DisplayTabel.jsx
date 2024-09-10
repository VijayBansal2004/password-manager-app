import React from "react";
import PasswordRow from "./PasswordRow";
const DisplayTabel = ({
  details,
  onHandleDelete,
  handleEdit,
  webURL,
  username,
  password,
}) => {
  const defaultPara = `No records to show`;
  return (
    <div className="table-container">
      <table className="table caption-top my-5">
        <thead>
          <tr>
            <th scope="col">Sno.</th>
            <th scope="col">Website URL</th>
            <th scope="col">User Name</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {details.length === 0 && defaultPara}
          {details.map((item, index) => {
            return (
              <PasswordRow
                key={index}
                item={item}
                index={index}
                onHandleDelete={onHandleDelete}
                handleEdit={handleEdit}
                webURL={webURL}
                username={username}
                password={password}
                id={details.id}
              />
            );
          })}
        </tbody>
      </table>
    </div>

  );
};

export default DisplayTabel;
