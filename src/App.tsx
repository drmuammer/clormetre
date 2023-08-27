import React from "react";
import InputForm from "./inputlogic"; // Import your InputForm component
import "./App.css"; // You can import your global app styles if needed

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chlorine Calculator</h1>
      </header>
      <main>
        <InputForm /> {/* Use the InputForm component here */}
      </main>
    </div>
  );
};

export default App;
