import { Route, Routes } from 'react-router-dom';
import './App.css';
import { UserLogin } from './components/UserLogin';
import { UserRegister } from './components/UserRegister';
import UserContextProvider from './context/UserContext';
import { Profile } from './components/Profile';
import { Navigation } from './components/Navigation';
import { UpdateUser } from './components/UpdateUser';
import { Home } from './components/Home';
import AuthGards from './util/AuthGards';
import RouteGards from './util/RouteGards';


function App() {
  return (
    <div className="App">
      <UserContextProvider >
        <Navigation />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/login' element={<AuthGards><UserLogin /></AuthGards>} />
          <Route path='/register' element={<AuthGards><UserLogin /></AuthGards>} />
          <Route path='/profile' element={<RouteGards><Profile/></RouteGards>} />
          <Route path='/edit/:id' element={<RouteGards><UpdateUser/></RouteGards>} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
