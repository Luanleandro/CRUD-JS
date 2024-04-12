const fetchUrl = 'http://localhost:5000';

async function createUser(user) {
  const response = await fetch(`${fetchUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  return data;
}
