import React, { version } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Tittle from './components/Tittle'
// import Description from './components/Description'
const root = ReactDOM.createRoot(document.getElementById('root'));
let data = [{
  subject : "Front-end",
  framework : "React",
  version : "1.2.3"
},{
  subject : "Back-end",
  framework : "Spring",
  version : "8.0.3"
},{
  subject : "API",
  framework : "Mongo DB",
  version : "4.5.3"
}]
root.render(
  <div>
  {/* <Tittle subject = {data[0].subject}>HI JII</Tittle>
  <Description framework = {data[0].framework} myversion={data[0].version}></Description>
  <Tittle subject = {data[1].subject}></Tittle>
  <Description framework = {data[1].framework} myversion={data[1].version}></Description>
  <Tittle subject = {data[2].subject}></Tittle>
  <Description framework = {data[2].framework} myversion={data[2].version}></Description> */}
    <App />
  </div>  

);

