import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./components/App";
import "./styles.css";
const store = createStore(rootReducer);
const root = document.getElementById("root");

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
};

renderApp();
// appRender=()=>{
//    return(<Provider store={store}>
//     <App />
//   </Provider>)
//   }
//  document.getElementById('root')

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
