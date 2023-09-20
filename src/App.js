import logo from './logo.svg';
import './App.css';
import {Link} from "@mui/material";
import Footer from "./composants/Footer";
import {Outlet, Route, Routes} from 'react-router-dom';
import ListPosts from "./composants/ListPosts";
import CreatePost from "./composants/CreatePost";
import Image from "./composants/Image";


export default function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='/'>
            <Route path='/listposts' element={<ListPosts/>}/>
              <Route path='/createpost' element={<CreatePost/>}/>
              <Route path='/image' element={<Image/>}/>
          </Route>
        </Routes>
        <div className="App">
          <Footer/>
        </div>
      </div>
  );
}

function Home() {
    return (
        <>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo'/>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </>
    )
}