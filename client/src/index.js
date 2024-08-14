import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

import RegisterStudentComponent from './components/authentication/student/RegisterStudentComponent';
import LoginStudentComponent from './components/authentication/student/LoginStudentComponent';

import RegisterTeacherComponent from './components/authentication/teacher/RegisterTeacherComponent';
import LoginTeacherComponent from './components/authentication/teacher/LoginTeacherComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegisterStudentComponent />
    <LoginStudentComponent />
    <RegisterTeacherComponent />
    <LoginTeacherComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
