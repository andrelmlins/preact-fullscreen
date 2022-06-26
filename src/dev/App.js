import { h } from 'preact';
import PreactFullScreen from '../lib';

const App = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <p>This is the Home component.</p>
    <PreactFullScreen>
      {({ ref, onRequest, onExit }) => (
        <div
          ref={ref}
          style={{ backgroundColor: 'red', width: 120, height: 120 }}
        >
          <button onClick={() => onRequest()}>FullScreen</button>
          <button onClick={() => onExit()}>Screen</button>
        </div>
      )}
    </PreactFullScreen>
  </div>
);

export default App;
