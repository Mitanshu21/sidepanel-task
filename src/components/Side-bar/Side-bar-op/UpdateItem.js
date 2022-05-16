import { useState } from "react";
import Button from "@mui/material/Button";
import InputField from "./InputField";
import { useSelector } from "react-redux";

const UpdateItem = ({ updateData }) => {
  const edit = useSelector((state) => state.crud.currentItem);
  const [input, setInput] = useState(edit.title || "");

  const submitHandler = (prop) => {
    if (prop.title.trim().length === 0) return;
    updateData(prop);
  };

  return (
    <>
      {edit.id !== null && edit !== false && (
        <InputField
          color="warning.main"
          label="Edit title:"
          input={input}
          setInput={setInput}
        >
          <Button
            variant="contained"
            color="success"
            sx={{ padding: "15px" }}
            onClick={() => {
              submitHandler({ id: edit.id, title: input });
            }}
          >
            Update
          </Button>
        </InputField>
      )}
    </>
  );
};

export default UpdateItem;
