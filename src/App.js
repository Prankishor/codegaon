import './App.css';

//Codemirror dependencies
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';


function App() {
  return (
    <div className='fullcontainer'>
      <header>
        <span>Nav Bar</span>
      </header>
      <div className='container'>
        <div className='files'>
          <span>Something</span>
        </div>
        <div className='codepen'>
          <CodeMirror
            value="console.log('hello world!');"
            height='88vh'
            extensions={[javascript({ jsx: true })]}
            theme={okaidia}
          />
        </div>
        <div className='output-window'>
          <span>OUTPUT WINDOW</span>
        </div>
      </div>
    </div>
  );
}

export default App;
