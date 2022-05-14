import { useState } from "react";
import Button from "@mui/material/Button";
import InputField from "./InputField";

const AddItem = ({ newTitle, updateNewTitle }) => {
  const [input, setInput] = useState("");

  const submitHandler = (prop) => {
    if (prop.value.trim().length === 0) return;
    updateNewTitle(prop);
  };

  return (
    <>
      {newTitle.id !== null && newTitle !== false && (
        <InputField
          color="info.main"
          label="Add new title:"
          input={input}
          setInput={setInput}
        >
          <Button
            variant="contained"
            color="success"
            sx={{ padding: "15px" }}
            onClick={() => {
              submitHandler({ id: newTitle.id, value: input });
            }}
          >
            Add
          </Button>
        </InputField>
      )}
    </>
  );
};

export default AddItem;
