import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Category from './pages/Category';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Post from './pages/Post';
import Contact from './pages/Contact';

// Tailwind CSS Style Sheet
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
            <Route path='/profile' element={<PrivateRoute/>}>
              <Route path='/profile' element={<Profile/>}/>
            </Route>
            
            <Route path='/category/:categoryName' element={<Category/>}/>
            <Route path='/create-post' element={<CreatePost/>}/>
            <Route path='/edit-post/:postId' element={<EditPost/>}/>
            <Route path='/category/:categoryName/:postId' element={<Post/>}/>
            <Route path='/contact/:landlordId' element={<Contact/>}/>
          </Routes>
        </Router>
      <ToastContainer/>
    </>
    );
}

export default App;
