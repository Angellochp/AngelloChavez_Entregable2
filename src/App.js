import './App.css';
import {BrowserRouter, Routes, Route }  from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import CarWidget from './Components/CarWidget/CarWidget';


function App() {
  return (
<>
  <BrowserRouter>    
    <NavBar />
    <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/Category/:id" element={<ItemListContainer/>} />
    <Route path="/item/:id " element={<ItemDetailContainer/>} />


    </Routes>
    </BrowserRouter>


   <ItemListContainer name="Bienvenido"/>
   </>
  
  );
}

export default App;
