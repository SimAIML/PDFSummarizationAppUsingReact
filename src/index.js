import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>

  {/* <React.Fragment>
    <Router>
      <NavigationBar /> */}
      <Header />
      <App/>
      <Footer/>
{/* 
      </Router>
    </React.Fragment> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// require('dotenv').config
// const { Client } = require("@octoai/client");

// const client = new Client(process.env.OCTOAI_TOKEN)

// (async () => {
//   const completion = await client.chat.completions.
//   create({
//     "model" : "llama-2-13b-chat-fp16",
//     "messages" : [
//         {"role": "system", "content": "You are a helpful assistant."},
//         {"role": "user", "content": "Hello!"},
//     ]
//   })

//   console.log(completion.choices[0].messages.content)

// }) ()
