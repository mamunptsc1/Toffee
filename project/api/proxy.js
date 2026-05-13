export default async function handler(req, res) {

  const url = req.query.url;

  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0",
      "referer": "https://toffeelive.com/"
    }
  });

  const data = await response.text();

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.send(data);

}
