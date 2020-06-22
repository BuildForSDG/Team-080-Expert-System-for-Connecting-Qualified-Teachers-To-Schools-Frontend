/*const app = async () => '#BuildforSDG';

export default app;*/


import React, {Component} from 'react';




import "bootstrap/dist/css/bootstrap.css";
import { HashRouter } from 'react-router-dom';
import Main from './components/main';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


const store = ConfigureStore();



class App extends Component {
    

  render() {
  
  
        return (
        <Provider store={store}>
          <HashRouter>
            <div className="">
                <Main />
            </div>
          </HashRouter>
         </Provider>
        );
    }

}

export default App;
