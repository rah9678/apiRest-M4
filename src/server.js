import express from "express";
import { referenceRouter } from "./routes/reference.routes.js";
import{ addInitialReferences} from "./controllers/initialReferences.controller.js";
import cors from 'cors';
const app = express()
const port = 8000


app.use(cors());
app.use(express.json());

app.use(referenceRouter);




addInitialReferences(); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})