export const fetchData = async (query) => {
  if (!query || query === '') return null;

  const apiUrl = import.meta.env.VITE_API_URL || 'localhost:3333';
  const arn = import.meta.env.VITE_AWS_LAMBDA || '';

  try {
    const response = await fetch(`${apiUrl}/v1/invoke-step-function`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        arn,
        query
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return JSON.parse(result.response);
  } catch (err) {
    console.error(err);
  }
};

export const mockApiCall = async (data, delayMs = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data });
    }, delayMs);
  });
};
