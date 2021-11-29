import './App.css';
import Header from './components/header/header';
import { useContext, useState } from 'react';
import { Btn } from './models/models';
import Submissions from './pages/Submissions/Submissions';
import Actions from './pages/Action/Action';
import Bind from './pages/Bind/Bind';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/login/Login';
const App = () => {
  const [activePage, setActivePage] = useState(Btn.Submissions);
  const [loginPopup, setLoginPopup] = useState(true);

  const renderPage = () => {
    switch (activePage) {
      case Btn.Submissions:
        return <Submissions setActivePage={setActivePage} />;
      case Btn.Bind:
        return <Bind setActivePage={setActivePage} />;
      case Btn.Actions:
        return <Actions setActivePage={setActivePage} />;
      default:
        return null;
    }
  };

  const popupCloseHandler = () => {
    setLoginPopup(false);
  };

  return (
    <div className="App">
      <Header renderPage={setActivePage} />
      {loginPopup ? <Login onClose={popupCloseHandler} setActivePage={setActivePage} show={loginPopup} /> : renderPage()}
      <ToastContainer
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </div>
  );
};

export default App;
