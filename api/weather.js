export default async function handler(req, res) {
  const { city, lat, lon } = req.query;

  const API_KEY = process.env.API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "API key missing" });
  }

  let url;

  if (city) {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Weather fetch failed" });
  }
}
