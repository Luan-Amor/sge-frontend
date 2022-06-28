import { Header } from './components/Header';
import { ApplicationRoutes } from './config/ApplicationRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { Nav } from './components/Nav';
import { useCookies } from 'react-cookie';

function App() {

  const [cookies, setCookies ] = useCookies(['name', 'perfil', 'token']);

  return (
    <div>
      <Header username={cookies.name}/>
      <Nav />
      <ApplicationRoutes setCookies={setCookies} cookies={cookies} />
    </div>
  );
}

export default App;
