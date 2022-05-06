import Main from '../Main';
import './style.scss';

function App() {
  return (
    <div className="app">
      <p style={{padding: '1em 0', textAlign: 'center'}}>Header</p>
      <Main />
      <p style={{padding: '1em 0', textAlign: 'center'}}>Footer</p>
    </div>
  );
}

export default App;
