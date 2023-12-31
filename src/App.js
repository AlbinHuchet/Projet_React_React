import logo from './logo.svg';
import './App.css';
import {Link} from "@mui/material";
import Footer from "./composants/Footer";
import {Outlet, Route, Routes} from 'react-router-dom';
import CreatePost from "./composants/CreatePost";
import Image from "./composants/Image";
import React from "react";
import ListPosts from "./composants/ListPosts";


export default function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='/'>
            <Route path='/listposts' element={<CreatePost/>}/>
              <Route path='/listposts02' element={<ListPosts/>}/>
              <Route path='/image' element={<Image/>}/>
          </Route>
        </Routes>
        <div className="App">
            <Footer />
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