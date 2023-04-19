import * as dotenv from "dotenv";
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
  return res.json({ msg: "Cypress test", status: 200 });
});

if (process.env.NODE_ENV === "production") {
  app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });

  // The error handler must be before any other error middleware and after all controllers
  app.use(Sentry.Handlers.errorHandler());
}

app.listen(port, () => {
  console.log(`App node reporte listening on port-t ${port}`);
  console.log(process.env.NODE_ENV);
});
