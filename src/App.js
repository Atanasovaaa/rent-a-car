import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/" component={Layout} />
      </Switch>
    </div>
  );
}

export default App;
