
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AvatarPage from './components/AvatarPage/AvatarPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/:avatarName" element={ <AvatarPage/> } />
    </Routes>
   
  );
};

export default App;