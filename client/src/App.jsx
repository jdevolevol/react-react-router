import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import ViewProductPage from "./pages/ViewProductPage";


function App() {
  return <div className="App">{
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage />  } />
        <Route path="/CreateProductPage" element={ <CreateProductPage />} />
        <Route path="/EditProductPage" element={<EditProductPage />} />
        <Route path="/ViewProductPage" element={<ViewProductPage />} />
      </Routes>
    </BrowserRouter>

  }</div>;
}

export default App;
