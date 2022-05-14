import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function InputField(props) {
  const changeHandler = (e) => {
    if (e.target.value.length > 50) return;
    props.setInput(e.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            fontSize: "h5.fontSize",
            textTransform: "capitalize",
            margin: "20px",
            color: props.color,
          }}
        >
          {props.label}
        </Box>
        <TextField
          type="text"
          id="outlined-size-normal"
          sx={{ margin: "10px" }}
          value={props.input}
          onChange={changeHandler}
        />
        {props.children}
      </Box>
      <Typography variant="subtitle2" sx={{ padding: "20px" }}>
        *Title should not be null and less than 50 characters.
      </Typography>
    </>
  );
}

export default InputField;
