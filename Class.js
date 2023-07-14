import React, { useState } from 'react';
import "../Styles/Class.css";
import SidebarHeaderContainer from '../Components/SidebarHeaderContainer';
import { Link } from "react-router-dom";

function Class() {
  const [selectedSession, setSelectedSession] = useState(null);
  const numbers = Array.from({ length: 44 }, (_, index) => index + 1);

  const handleSessionClick = (sessionNumber) => {
    setSelectedSession(sessionNumber);
  };

  const renderContent = () => {
    if (selectedSession === null) {
      return (
        <div className='mid-container'>
          <h3 className='mid-text'>No session title available.</h3>
          <h5 className='mid-text'>Class Schedule is not updated.</h5>
          <hr className='divider' />
          <h4 className='mid-title'>Contents:</h4>
          <p className='mid-text'>No contents available.</p>
          <h4 className='mid-title'>Pre-read:</h4>
          <p className='mid-text'>No Pre-read available.</p>
        </div>
      );
    } else if (selectedSession === 1) {
      return (
        <div className='mid-container'>
          <h4 className='mid-title'>Javascript - Day -1: Introduction to Browser & web</h4>
          <p>13/03/2023 - Monday - 8:00 AM : 11:00 AM</p>
          <h4 className='mid-title'>Contents:</h4>
          <p className='mid-text'>Introduction to web Browser Wars DOM tree CSSOM tree,</p>
          <p className='mid-text'>Browser internals - HTML parser,</p>
          <p className='mid-text'>CSS parser, JavaScript V8 engine,</p>
          <p className='mid-text'>Internals IP – MAC address – Ports & Evolution of HTTP,</p>
          <p className='mid-text'>HTTP Methods</p>
          <p className='mid-text'>How the Server looks at the URL</p>
          <p className='mid-text'>Request & Response cycle</p>
          <h4 className='mid-title'>Pre-read:</h4>
          <p className='mid-text'>No pre-read available.</p>
        </div>
      );
    }

    else if (selectedSession === 2) {
      return (
        <div className='mid-container'>
          <h4 className='mid-title'>Javascript - Day -2: Request & Response cycle</h4>
          <p>14/03/2023 - Tuesday - 8:00 AM : 10:30 AM</p>
          <h4 className='mid-title'>Contents:</h4>
          <p className='mid-text'>HTML Browser view - Debugger, Inspect,</p>
          <p className='mid-text'>Browser js vs Node js</p>
          <p className='mid-text'>Data types</p>
          <p className='mid-text'>Copy by value and Copy by reference</p>
          <p className='mid-text'>Window & document object</p>
          <h4 className='mid-title'>Pre-read:</h4>
          <p className='mid-text'>No pre-read available.</p>
        </div>
      );
    }

    else if (selectedSession === 3) {
      return (
        <div className='mid-container'>
          <h4 className='mid-title'>Javascript - Day -3: JS Array & Objects</h4>
          <p>15/03/2023 - Wednesday - 8:00 AM : 11:00 AM</p>
          <h4 className='mid-title'>Contents:</h4>
          <p className='mid-text'>Introduction to array,</p>
          <p className='mid-text'>Array and Json interaction,</p>
          <p className='mid-text'>XMLHTTP request,</p>
          <p className='mid-text'>Hoisting & Scopes,</p>
          <h4 className='mid-title'>Pre-read:</h4>
          <p className='mid-text'>No pre-read available.</p>
        </div>
      );
    }

    else if (selectedSession === 4) {
      return (
        <div className='mid-container'>
          <h4 className='mid-title'>JavaScript - Day -4: Functions</h4>
          <p>17/03/2023 - Friday - 8:00 AM : 10:30 AM</p>
          <h4 className='mid-title'>Contents:</h4>
          <p className='mid-text'>Introduction to functions</p>
          <p className='mid-text'>function & return keyword</p>
          <p className='mid-text'>Types of functions</p>
          <h4 className='mid-title'>Pre-read:</h4>
          <p className='mid-text'>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
            </a>
          </p>
        </div>
      );
    }
  };

  return (
    <div className='class-container'>
      <SidebarHeaderContainer headerTitle='Class' />
      <h1 className='join-box'>Join the class on time...</h1>
      {renderContent()}
      <div className='session-container'>
        <span className='number-container'>
          <h1 className='session-title'>Session RoadMap</h1>
          {numbers.map(number => (
            <div
              key={number}
              className={`number ${selectedSession === number ? 'selected' : ''}`}
              onClick={() => handleSessionClick(number)}
            >
              {number}
            </div>
          ))}
        </span>
      </div>
      <div className='additional-session-container'>
        <h1 className='additional-title'>Additional Sessions</h1>
        <span className='additional-text'>
          <i className="fa-sharp fa-solid fa-circle-exclamation"></i>No Additional sessions
        </span>
      </div>
    </div>
  );
}

export default Class;
