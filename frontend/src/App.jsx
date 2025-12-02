import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rating from './Pages/Rating';
import Form from "./component/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Rating/>} />
        <Route path="/agregar" element={<Form/>}/>
        <Route path="/editar/:id" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
