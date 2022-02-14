import { Route, Routes } from "react-router-dom";
import { Employees } from "./pages/Employees";
import { Employee } from "./pages/Employee";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Employees />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/employee/:id" element={<Employee />} />
    </Routes>
  );
}

export default App;
