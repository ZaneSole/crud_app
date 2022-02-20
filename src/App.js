import React from 'react';
import './App.css';
import Delete from './routes/Delete.js';
import Put from './routes/Put.js';
import Post from './routes/Get.js';
import Get from './routes/Post.js';
import Logs from './routes/Logs.js';


const App = () => {

    return (

        <div className='app'>
            <Get/>
            <Post/>
            <Logs/>
            <Delete/>
            <Put/>
        </div>
    )
}

export default App;