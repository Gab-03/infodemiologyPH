const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/trends-data', async (req, res) => {
    try {
        const response = await axios.get('YOUR_GOOGLE_TRENDS_API_URL', {
            // Include authentication headers or params if required by the API
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
