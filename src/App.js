import React, { useRef, useState } from 'react';
import './App.css';
import useOutsideClick from './outSideClickHook'; // Correct import for the custom hook

function App() {
  const divRef = useRef(null);
  const [show, setShow] = useState(false);

  // Apply the custom hook
  useOutsideClick(divRef, ()=>setShow(false));

  return (
    <div className="App">
      {show ? (
        <div className="area" ref={divRef}>
          <h1>Content Area</h1>
          <p>If you click outside of this content then this content will disappear.</p>
        </div>
      ) : (
        <button onClick={() => setShow(true)}>Show Content</button>
      )}
    </div>
  );
}

export default App;
