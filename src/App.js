import "./App.css";
import MainPage from "./components/Main-page/MainPage";
import Box from "@mui/material/Box";

function App() {
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
      <MainPage />
    </>
  );
}

export default App;
