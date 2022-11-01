import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={(e) => {alert(12345)}}>Hello</Button>
        <Button disabled>Hello disabled</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello Danger</Button>
        <Button btnType={ButtonType.Link} href='https://baidu.com'>baidu</Button>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
