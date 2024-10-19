import React, { useEffect, useState } from 'react';

function App() {
  const [authCode, setAuthCode] = useState(null);

  // Function to extract the authorization code from the URL
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('code'); // Capture 'code' parameter from the URL
    if (code) {
      setAuthCode(code);
    } else {
      setAuthCode('No Authorization Code Found');
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>OAuth Redirect Page</h1>
      {authCode ? (
        <>
          <h3>Authorization Code:</h3>
          <p style={{ color: 'green', fontSize: '20px' }}>{authCode}</p>
        </>
      ) : (
        <p>No Authorization Code in URL</p>
      )}
    </div>
  );
}

export default App;
