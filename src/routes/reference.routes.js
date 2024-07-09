import { Router } from "express";
import { searchAll, createReference } from "../controllers/reference.controller.js";

const referenceRouter = Router();

referenceRouter.get("/", (req,res)=> { 
    let result = searchAll();
    res.json({result})
});

referenceRouter.post("/", (req,res)=> {
    const {id,name,biography, category,photo_url} = req.body;
    createReference(id,name,biography, category,photo_url);
    res.json({message:" sucesso"})
});

export { referenceRouter }