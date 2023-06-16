import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Post from './Pages/Post/Post';

function App() {
  return (
    <div className="App">
       <Header/>
      <div className='container'>
      <BrowserRouter >
          <Routes>
            <Route index path='/' element={<Home/>}></Route>
            <Route path='/post' element={<Post/>}></Route>
            
          </Routes>
       </BrowserRouter>
      </div>
       
    </div>
  );
}

export default App;
