
import express from "express";
import { referenceRouter } from "./routes/reference.routes.js";
const app = express()
const port = 3000

app.use(express.json());

app.use(referenceRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})