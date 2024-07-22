
import express from "express";
import { referenceRouter } from "./routes/reference.routes.js";
import{ addInitialReferences} from "./controllers/initialReferences.controller.js";
const app = express()
const port = 4000

app.use(express.json());

app.use(referenceRouter);

addInitialReferences(); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})