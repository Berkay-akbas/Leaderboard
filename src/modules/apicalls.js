export const asyncPostCall = async (userName, userScore) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/T4vDJJBOqBSz7SE2Xntv/scores/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: userName,
        score: userScore,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const asyncGetCall = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/T4vDJJBOqBSz7SE2Xntv/scores/', {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};