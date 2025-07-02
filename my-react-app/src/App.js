import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('React Example');
  const [count, setCount] = useState(0);

  const handleChangeTitle = () => {
    const newCount = count + 1;
    setCount(newCount);
    setTitle(`Title changed ${newCount} time(s)!`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{title}</h1>
      <button onClick={handleChangeTitle} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Title (React)
      </button>
      <p style={{ fontSize: '18px' }}>Update count: {count}</p>
    </div>
  );
}

export default App;
