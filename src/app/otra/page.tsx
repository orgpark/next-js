'use client';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [urls, setUrls] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const urlList = urls.split('\n').filter((url) => url.trim() !== '');

    // Validate each URL
    const isValidUrl = urlList.every((url) => {
      try {
        const urlObj = new URL(url);
        return urlObj.hostname.includes('iherb.com');
      } catch (error) {
        return false;
      }
    });

    if (!isValidUrl) {
      setError('Invalid URL or URL does not contain "iherb.com"');
      return;
    }

    // Make POST API call using axios
    try {
      await axios.post('/api/your-endpoint', { urls: urlList });
      // Handle success
    } catch (error) {
      // Handle error
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputUrls = event.target.value;
    const urlList = inputUrls.split('\n').filter((url) => url.trim() !== '');

    if (urlList.length <= 20) {
      setUrls(inputUrls);
    } else {
      const truncatedUrls = urlList.slice(0, 20).join('\n');
      setUrls(truncatedUrls);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <textarea rows={20} value={urls} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p>{error}</p>}
    </div>
  );
}
