import express from "express";
import fetchReq from "node-fetch";
import cors from "cors";

async function fetchData(text) {
  try {
    const response = await fetchReq(
      "https://www.freedetector.ai/api/content_detector/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "10f0e61d2663b356b3076af192ac0a22",
        },
        body: JSON.stringify({
          text,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

const app = express();

app.use(cors());
app.use(express.json());

app.post("/detection", async (request, response) => {
  const { text } = request.body;
  // const detectionResults = await fetchData(text);
  // response.status(200).json(detectionResults);
  response.status(200).json({
    success: true,
    score: 27.750000000000004,
    message: null,
  });
});

const port = 4300;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
