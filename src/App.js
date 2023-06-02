import './App.css';

//Hooks
import { useState } from 'react';

//Codemirror dependencies
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { okaidia } from '@uiw/codemirror-theme-okaidia';


function App() {

  const codeForCpp = '#include <iostream> \n int main() { \n std::cout << "Hello World!"; \n return 0; \n }'
  const codeForJava = 'class HelloWorld {\n public static void main(String[] args) { \nSystem.out.println("Hello, World!"); \n}\n}'
  const codeForPython = 'print("Hello, world!")'

  const [sampleCode, setSampleCode] = useState(codeForCpp)
  const [index, setIndex] = useState(0)
  const extentions = [cpp(), java(), python()]

  const handleChange = (e) => {
    let lang = e.target.value
    if (lang === 'C++') {
      setIndex(0)
      setSampleCode(codeForCpp)
    }
    else if (lang === 'Java') {
      setIndex(1)
      setSampleCode(codeForJava)
    }
    else {
      setIndex(2)
      setSampleCode(codeForPython)
    }
  }

  return (
    <div className='container'>
      <div className='left_container'>
        <div className='editor_top'>
          <div className='select_container'>
            <select defaultValue="C++" className='select_languages' id='languages' onChange={handleChange}>
              <option value="C++">C++</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
            </select>
          </div>

          <div className='submit_container'>
            <button className='submit_button'>Submit</button>
          </div>
        </div>

        <div className='codepen'>
          <CodeMirror
            value={sampleCode}
            height='88vh'
            width='100%'
            extensions={
              [extentions[index]]
            }
            theme={okaidia}
          />
        </div>
      </div>
      <div className='right_container'>
        <label>Input</label>
        <div className='input_window'>
          <textarea rows={20} cols={50} className='input_area'>

          </textarea>
        </div>
        <label>Output</label>
        <div className='output_window'>
          <textarea cols={50} rows={20} className='output_area' readOnly>
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
