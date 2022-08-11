import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterRecruiter from './pages/RegisterRecruiter';
import Category from './pages/Category';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Post from './pages/Post';
import Contact from './pages/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/tailwind.css';

function App() {
    return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/register-recruiter' element={<RegisterRecruiter/>}/>
            <Route path='/profile' element={<PrivateRoute/>}>
              <Route path='/profile' element={<Profile/>}/>
            </Route>
            <Route path='/explore' element={<PrivateRoute/>}>
              <Route path='/explore' element={<Explore/>}/>
            </Route>
            <Route path='/category/:categoryName' element={<Category/>}/>
            <Route path='/create-post' element={<CreatePost/>}/>
            <Route path='/edit-post/:postId' element={<EditPost/>}/>
            <Route path='/category/:categoryName/:postId' element={<Post/>}/>
            <Route path='/contact/:recruiterId' element={<Contact/>}/>
          </Routes>
        </Router>
      <ToastContainer/>
    </>
    );
}

export default App;
