import "./App.css";
import Divider from "./components/Divider";
import Editor from "./components/Editor/Editor";
import Navbar from "./components/navbar/Navbar";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app_container">
        <Editor />
        <Divider />
        <Preview />
      </div>
    </div>
  );
}

export default App;
