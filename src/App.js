import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import Shop from './Pages/Shop'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/entrance' element={<Shop />} />
        <Route path='/school' element={<Shop />} />
        <Route path='/others' element={<Shop />} />

      </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
