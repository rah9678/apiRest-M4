import { Router } from "express";
import { searchAll,searchByName, createReference,deleteReference,updateReference, searchById,searchByCategory,getReferencesInAlphabeticalOrder} from "../controllers/reference.controller.js";

const referenceRouter = Router();

referenceRouter.get("/search", (req,res)=> { 
    let result = searchAll();
    res.status(200).json({result});
});


referenceRouter.get("/search/name/:name", (req, res) => {
    const { name } = req.params;
    const reference = searchByName(name);
    if (reference) {
        res.status(200).json({ reference });
    } else {
        res.status(404).json({ message: "Referência não encontrada" });
    }
});

referenceRouter.get("/search/:id", (req, res) => {
    const { id } = req.params;
    const reference = searchById(id);
    if (reference) {
        res.status(200).json({ reference });
    } else {
        res.status(404).json({ message: "Referência não encontrada" });
    }
});

referenceRouter.get("/search/category/:category", (req, res) => {
    const { category } = req.params;
    const references = searchByCategory(category);
    if (references.length > 0) {
        res.status(200).json({ references });
    } else {
        res.status(404).json({ message: "Nenhuma referência encontrada para esta categoria" });
    }
});


referenceRouter.get("/sorted", (req, res) => {
    const sortedReferences = getReferencesInAlphabeticalOrder();
    res.status(200).json({ sortedReferences });
});

referenceRouter.post("/createreference", (req,res)=> {
    const {name,biography, category,photo_url} = req.body;
    createReference(name,biography, category,photo_url);
    res.status(200).json({message:" sucesso"})
    return res;
});

referenceRouter.patch("/updatereference", (req,res) => {
    const { name, id } = req.body;
    const referenceUpdate = updateReference(id, name);
    res.status(200).json({referenceUpdate});
})

referenceRouter.delete("/deletereference/:id", (req,res) => {
    const { id } = req.params; 
    const reference = deleteReference(id);
    res.status(200).json({reference});
    if (reference) {
        res.status(200).json({ message: "Referência deletada com sucesso", reference });
    } else {
        res.status(404).json({ message: "Referência não encontrada" });
    }
})

export { referenceRouter }