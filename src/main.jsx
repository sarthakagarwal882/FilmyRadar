import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './store/Store.jsx'
// import Navbar from './Components/Navbar/Navbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <Navbar/> */}
    <App />
  </Provider>,
)
