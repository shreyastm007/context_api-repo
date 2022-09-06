import logo from './logo.svg';
import './App.css';
import ComponentA from "./components/ComponentA";
import {DataProvider} from "./components/ContextApi";
import {DataConsumer} from "./components/ContextApi";
import { useState } from 'react';
import ComponentB from './components/ComponentB';
import { UserProvider } from './components/contextApi/ContextUser';

function App() {
  let fName="Ghana";
  let[userName, setUserName]=useState("Avi");
  return (
    <div className="App">
    <h1>{userName}</h1>
    <DataProvider value={fName}>
      <ComponentA />
      </DataProvider>
      <UserProvider  value={setUserName}> 
      <ComponentB />
      </UserProvider>
    </div>
  );
}

export default App;
