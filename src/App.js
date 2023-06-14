import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
       <Header/>
      <div className='container'>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route></Route>
            
          </Routes>
       </BrowserRouter>
      </div>
       
    </div>
  );
}

export default App;
