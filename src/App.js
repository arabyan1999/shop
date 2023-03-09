import React from "react"
import { Provider } from 'react-redux';
import store from './store/store';
import HomePage from "./pages/HomePage"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;
