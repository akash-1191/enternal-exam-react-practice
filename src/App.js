
import './App.css';
import About from './Component/About';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Register from './Component/Register';
import Loogin from './Component/Loogin';
import Footer from './Component/Footer';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element: <><Navbar/><Home/></>
    },
    {
      path:'/About',
      element:<><Navbar/><About/></>
    },
    {
      path:'/Register',
      element:<><Navbar/><Register/></>
    },
    {
      path:'/Login',
      element:<><Navbar/><Loogin/></>
    },

  ])
  return (
    <>
    
    
    <RouterProvider router={router}/>
    <Footer/>
    </>
  );
}

export default App;
