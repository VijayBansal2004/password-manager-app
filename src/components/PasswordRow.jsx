import React from "react";
import { useState, useRef } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { MdContentCopy } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { LiaSave } from "react-icons/lia";

const PasswordRow = ({
  item,
  index,
  onHandleDelete,
  handleEdit,
}) => {
  const [maskPassword, setMaskPassword] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const editedURL = useRef();
  const editedName = useRef();
  const editedPass = useRef();

  const handleToggleEditButton = () => {
    setIsEditable(!isEditable);
  };
  const onCopyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
    alert("Text has been copied to the clipboard successfully!");
  };

  return (
    <>
      <tr>
        <td>
          <div className="d-flex justify-content-between">
            <span>{index + 1}</span>
          </div>
        </td>
        <td>
          <div className="d-flex justify-content-between">
            <textarea
              name="text"
              style={{ border: "none", width: "90%" }}
              className={`p-2 textarea-data ${isEditable && "border border-1 rounded"}`}
              readOnly={!isEditable}
              rows={1}
              ref={editedURL}
            >
              {item.webURL}
            </textarea>
            <span>
              <MdContentCopy onClick={() => onCopyToClipboard(item.webURL)} />
            </span>
          </div>
        </td>
        <td>
          <div className="d-flex justify-content-between">
            <textarea
              name="text"
              style={{ border: "none", width: "90%" }}
              className={`p-2 textarea-data ${isEditable && "border border-1 rounded"}`}
              readOnly={!isEditable}
              rows={1}
              ref={editedName}
            >
              {item.userName}
            </textarea>

            <span>
              <MdContentCopy onClick={() => onCopyToClipboard(item.userName)} />
            </span>
          </div>
        </td>
        <td>
          <div className="d-flex justify-content-between">
            {/* <input
              type={maskPassword ? "text" : "password"}
              style={{ border: "none", width: "70%" }}
              // readOnly={!isEditable}
              value={item.password}
              className={`p-2 ${isEditable && "border border-1 rounded"}`}
            /> */}

            <textarea
              name="text"

              type={maskPassword ? "text" : "password"}

              style={{ border: "none", width: "70%" }}
              className={`p-2 textarea-data ${isEditable && "border border-1 rounded"}`}
              readOnly={!isEditable}
              rows={1}
              ref={editedPass}
            >
              {item.password}
            </textarea>

            <span>
              <span>
                <MdContentCopy
                  className="me-2"
                  onClick={() => onCopyToClipboard(item.password)}
                />
              </span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setMaskPassword(!maskPassword);
                }}
              >
                {maskPassword ? <LuEye /> : <LuEyeOff />}
              </span>
            </span>
          </div>
        </td>
        <td className="d-flex justify-content-end">
          {isEditable ? (
            <button
              type="button"
              className="btn btn-success me-2"
              onClick={() => handleEdit(item.id, editedURL.current.value, editedName.current.value, editedPass.current.value, isEditable, setIsEditable)}
            >
              <LiaSave />
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-light me-2"
              onClick={handleToggleEditButton}
            >
              <FaRegEdit />
            </button>
          )}

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onHandleDelete(item.webURL)}
          >
            <RiDeleteBin6Line />
          </button>
        </td>
      </tr >
    </>
  );
};

export default PasswordRow;
