import { Header } from './components/Header';
import { ApplicationRoutes } from './config/ApplicationRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from './components/Nav';

function App() {

  return (
    <div>
      <Header/>
      <Nav/>
      <ApplicationRoutes />
    </div>
  );
}

export default App;
