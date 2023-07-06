import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card/card';
import { database } from './database';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="container">
      <div class="fruits">
        <h2>Fruits</h2>
        <div class="cards">
          {database.map(item => {
            return <Card data={item} />
          })}
        </div>
      </div>
    </div>
  </React.StrictMode>
);
