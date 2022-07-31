import { Header } from './components/Header';
import { ApplicationRoutes } from './config/ApplicationRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { Nav } from './components/Nav';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Nav />
        <ApplicationRoutes />
      </PersistGate>
    </Provider>
  );
}

export default (App);
