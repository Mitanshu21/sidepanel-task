import "./App.css";
import { useState } from "react";
import MainPage from "./components/Main-page/MainPage";
import Box from "@mui/material/Box";

const initialData = [
  { id: 1, title: "Batman" },
  { id: 2, title: "Spiderman no way home" },
  { id: 3, title: "guardians of the galaxy" },
];

function App() {
  const [state, setState] = useState(initialData);

  return (
    <>
      <Box
        sx={{
          fontSize: "h4.fontSize",
          textTransform: "capitalize",
          textAlign: "center",
          margin: "40px",
          fontWeight: "bold",
          letterSpacing: 10,
          color: "info.main",
        }}
      >
        SIDEPANEL
      </Box>
      <MainPage data={state} setAllData={setState} />
    </>
  );
}

export default App;
