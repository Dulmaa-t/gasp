import Pages from './pages'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ConfigContextProvider from 'context/configContext';

function App() {
  return (
    <ConfigContextProvider>
      <ToastContainer />
      <Pages />
    </ConfigContextProvider>
  );
}

export default App;
