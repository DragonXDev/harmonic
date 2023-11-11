import express from "express";
import multer from "multer";
import fs from "fs/promises";
import path from "path";
import cors from "cors";
import { analyzeAudioFile } from "./audioAnalysis.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const upload = multer({ dest: "uploads/" });

// Enable CORS for client-side
app.use(cors());

app.post("/analyze", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    const filePath = path.join(__dirname, req.file.path);
    const result = await analyzeAudioFile(filePath); // Analyze the audio file
    console.log("RESULT: ", result);

    if (result && Array.isArray(result)) {
      console.log("HERE1");
      res.json(result); // Send the coordinates as the response
    } else {
      console.log("HERE2");
      res.status(500).send("Error analyzing audio file.");
    }

    await fs.unlink(filePath); // Clean up: delete the uploaded file
  } catch (error) {
    console.log("HERE3");
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
