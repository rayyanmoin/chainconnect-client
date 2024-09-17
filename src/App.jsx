import{Routes, BrowserRouter as Router, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import PostDetail from './pages/PostDetail'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (

      <div>
        <Router>
          <Navbar/>
          <Routes>      
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<CreatePost/>}/>
            <Route path='/post' element={<PostDetail/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/profile' element={<Profile/>}/>
    
          </Routes>
        </Router>
      </div>

  )
}

export default App
