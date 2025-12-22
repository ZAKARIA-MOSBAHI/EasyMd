 import "./App.css";
import Editor from "./components/Editor/Editor";
import Navbar from "./components/navbar/Navbar";
  
function App() {
 
  return (
    <div className="app">
      <Navbar />
     <Editor/>
    </div>
  );
}

export default App;
