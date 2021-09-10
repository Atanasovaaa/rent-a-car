import { Route } from 'react-router-dom';
import './App.scss';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Route to="/" component={Layout} />
    </div>
  );
}

export default App;
