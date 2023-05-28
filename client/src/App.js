import './App.css';
// import AddCar from './pages/AddCarPage/AddCar';
// import Login from './pages/LoginPage/Login';
import Register from './pages/RegisterPage/Register';
// import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const userRole = "seller";
  return (
    <div>
      <Register />
      {/* <Login /> */}
      {/* <AddCar /> */} 
      <Navbar/>
      {/* <HomePage /> */}
      <Footer/>
     
    </div>
  );
}

export default App;
