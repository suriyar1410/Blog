import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Post from './components/post.js';
import ShowPost from './components/ShowPost.js';
import AddPost from './components/AddPost.js';
import Headers from './Main/Header.js'
import About from './components/About.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
function App() {
  return (
    <BrowserRouter>
    <Headers/>
    <Routes>
      <Route path='/' element={<Post/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/ShowPost/:id' element={<ShowPost/>}/>
      <Route path='/AddPost' element={<AddPost/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
