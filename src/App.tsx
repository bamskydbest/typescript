import "./App.css";
import FirstProject from "./components/FirstProject.tsx";
import Tailwind from "./components/Tailwind.tsx";
// import FirstProject from "./components/FirstProject";
// import Tailwind from "./components/Tailwind";

function App() {
  document.title = "Local Storage";
  return (
    <>
      <h1>Storing Items in Local Storage</h1>
      {/* <FirstProject />
      <Tailwind /> */}
      <FirstProject />
      <Tailwind />
    </>
  );
}

export default App;
