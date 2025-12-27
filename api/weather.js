export default async function handler(req, res) {
  const { city, lat, lon } = req.query;

  const API_KEY = process.env.OPENWEATHER_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "API key missing" });
  }

  let url;

  if (city) {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
  } else if (lat && lon) {
    url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  } else {
    return res.status(400).json({ error: "No city or coordinates provided" });
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errData = await response.json();
      return res.status(response.status).json({ error: errData.message });
    }

    const data = await response.json();

    if (!data.city) {
      return res.status(500).json({ error: "City data missing in API response" });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Weather fetch failed", details: err.message });
  }
}
