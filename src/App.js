import "./App.css";
import { useState } from "react";
import MainPage from "./components/Main-page/MainPage";
import Box from "@mui/material/Box";

const initialData = [
  { id: 1, title: "hello world" },
  { id: 2, title: "Spiderman " },
  { id: 3, title: "no time to die" },
  { id: 4, title: "billie elish" },
  { id: 5, title: "guardians of the galaxy" },
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
        }}
      >
        SIDEPANEL
      </Box>
      <MainPage data={state} setAllData={setState} />
    </>
  );
}

export default App;
