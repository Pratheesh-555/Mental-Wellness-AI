import React, { useState } from 'react';
import { analyzeText, analyzeImage } from '../api/api';

const Analysis = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleTextAnalysis = async () => {
    const data = await analyzeText(input);
    setResult(data);
  };

  const handleImageAnalysis = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;
      const data = await analyzeImage(base64Image);
      setResult(data);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h1>Analyze Your Mental Wellness</h1>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleTextAnalysis}>Analyze Text</button>
      <input type="file" onChange={handleImageAnalysis} />
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
};

export default Analysis;
