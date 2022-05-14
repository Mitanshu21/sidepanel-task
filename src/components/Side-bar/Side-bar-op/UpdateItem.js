import { useState } from "react";
import Button from "@mui/material/Button";
import InputField from "./InputField";

const UpdateItem = ({ edit, updateData }) => {
  const [input, setInput] = useState(edit.value || "");

  const submitHandler = (prop) => {
    if (prop.value.trim().length === 0) return;
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
              submitHandler({ id: edit.id, value: input });
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
