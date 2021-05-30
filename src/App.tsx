import React, { useState, useEffect } from 'react';
import './css/App.css';
import { Food } from "./model/food"

var list:Food[] = [];

list.push(new Food("Pizza", 10, "Pizza Hut"));
list.push(new Food("Burger", 7, "Burger King"));

function display_all(flist:Food[])
{
  var a:string[] = [];
  flist.forEach(model => {
    a.push(model.get_product() + "\n");
  })
  return (a.map((model) => (<li key={model}>{model}</li>)));
}

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🍴 GitHuber-eat</h1>
        <ul>{display_all(list)}</ul>
      </header> 
    </div>
  );
}

export default App;