export default async function handler(req, res) {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send("No URL");
  }

  try {
    const response = await fetch(url, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Linux; Android 14; SM-A515F) AppleWebKit/537.36 Chrome/120.0.0.0 Mobile Safari/537.36",
      },
    });

    const data = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(data);
  } catch (err) {
    res.status(500).send("Proxy Error");
  }
}
