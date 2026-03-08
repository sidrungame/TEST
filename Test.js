const https = require("https");
const axios = require("axios");

const agent = new https.Agent({ rejectUnauthorized: false });

axios.get(url, { httpsAgent: agent, headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` } })
