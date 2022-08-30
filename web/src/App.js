import 'antd/dist/antd.min.css'
import {Routes,Route,unstable_HistoryRouter as HistoryRouter,BrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout';
import NoFound from './pages/NoFound';
import Login from './pages/Login'
import Home from './pages/Home'
function App() {
  return (
     <BrowserRouter  style={{height:"100%",width:"100%"}}>
       <Routes>
          <Route path='/' element={
             <Layout/>
          }>
           <Route Route path='/home' element={<Home/>}></Route>
          </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<NoFound/>}></Route>
       </Routes>
     </BrowserRouter>
  );
}

export default App;
