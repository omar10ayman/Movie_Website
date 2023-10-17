import { Route, Routes, useNavigate ,Navigate} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import  Resister from './Components/Resister';
import Login from './Components/Login';
import Movies from './Components/Movies';
import MovieDetails from './Components/MovieDetails';
import TVShows from './Components/Tvshow';
import AddFav from './Components/AddFav';
import MovieContextProvider from './store';
import Footer from './Components/Footer';

function App() {
  const naviagte= useNavigate()
  const getfromLacal=JSON.parse(localStorage.getItem("userArr"))
  const getfromSession=JSON.parse(sessionStorage.getItem("user"))
  function logOut(){
    sessionStorage.removeItem("user");
    naviagte("/login");
  }
  function ProdectedRoute(props){
    if(getfromSession===null){
      return <Navigate to={"/login"}/>
    }else{
      return props.children
    }
  }
  return (
    <>
   <MovieContextProvider>
 <Navbar getfromLacal={getfromLacal}  getfromSession={getfromSession} logOut={logOut}/>
    <div className="container-fluid h-100" >
    <Routes>
      <Route path='/' element={<ProdectedRoute><Home/></ProdectedRoute>} />
      <Route path='/home' element={<ProdectedRoute><Home/></ProdectedRoute>} />
      <Route path='/movies' element={<ProdectedRoute><Movies/></ProdectedRoute>} />
      <Route path='/tv' element={<ProdectedRoute><TVShows/></ProdectedRoute>} />
      <Route path='/addfav' element={<ProdectedRoute><AddFav/></ProdectedRoute>} />
      <Route path='/moviedetiels/:id' element={<ProdectedRoute><MovieDetails/></ProdectedRoute>} />
      <Route path='/Resister' element={<Resister getfromLacal={getfromLacal}/>} />
      <Route path='/login' element={<Login getfromLacal={getfromLacal} getfromSession={getfromSession}/>} />
    </Routes>
    <Footer/>
    </div>
   </MovieContextProvider>
    </>
  )
}

export default App;
