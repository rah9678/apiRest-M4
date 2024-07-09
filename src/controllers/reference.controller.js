import { Reference } from "../models/reference.model.js";

let referenceList = [];
export const createReference = (id,name,biography, category,photo_url) => {
    let reference = new Reference(id,name,biography, category,photo_url);
    referenceList.push(reference);
}


export const searchAll = () => {
    return referenceList;
}

export const searchByName = (nome) => {
    return referenceList.find(reference=> reference.nome === nome);
}