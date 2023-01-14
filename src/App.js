
import React from 'react'
import CakeContainer from './component/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import NewConTainer from './component/NewConTainer';
console.log(store);
function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <CakeContainer/>
       <NewConTainer/>
    </div></Provider>
  );
}

export default App;
