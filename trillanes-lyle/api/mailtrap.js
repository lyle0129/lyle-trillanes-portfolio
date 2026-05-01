export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const response = await fetch('https://send.api.mailtrap.io/api/send', {
      method: 'POST',
      headers: {
        'Authorization': req.headers.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.text();
    res.status(response.status).send(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
