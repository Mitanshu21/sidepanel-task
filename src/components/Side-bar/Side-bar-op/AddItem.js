import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const AddItem = ({ newTitle, updateNewTitle }) => {
  const [input, setInput] = useState("");

  return (
    <>
      {newTitle.id !== null && newTitle !== false && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            type="text"
            id="outlined-size-normal"
            sx={{ margin: "10px" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            variant="contained"
            color="success"
            sx={{ padding: "15px" }}
            onClick={() => {
              updateNewTitle({ id: newTitle.id, value: input });
            }}
          >
            Add
          </Button>
        </Box>
      )}
    </>
  );
};

export default AddItem;
