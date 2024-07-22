import { Reference } from "../models/reference.model.js";

export const referenceList = [];


export const createReference = (id, name, biography, category, photo_url) => {
    let reference = new Reference(id, name, biography, category, photo_url);
    referenceList.push(reference);
    return reference;
}

export const searchAll = () => {
    return referenceList;
}

export const searchByName = (nome) => {
    return referenceList.find(reference => reference.name === nome);
}

export const searchById = (id) => {
    return referenceList.find(reference => reference.id == id);
}

export const searchByCategory = (category) => {
    return referenceList.filter(reference => reference.category === category);
}

export const getReferencesInAlphabeticalOrder = () => {
    const sortedReferences = [...referenceList].sort((a, b) => a.name.localeCompare(b.name));
    return sortedReferences;
};
export const updateReference = (id, name) => {
    const referenceAlreadyExist = referenceList.find(reference => reference.id == id);
    if (referenceAlreadyExist) {
        let indexReference = referenceList.findIndex(reference => reference.id == id);
        referenceList[indexReference].name = name;
        return referenceList[indexReference];
    } else {
        return "Nao existe uma referencia com este id";
    }
}

export const deleteReference = (id) => {
    const referenceAlreadyExist = referenceList.find(reference => reference.id == id);
    if (referenceAlreadyExist) {
        let indexReference = referenceList.findIndex(reference => reference.id == id);
        referenceList.splice(indexReference, 1);
        return referenceAlreadyExist;
    } else {
        return "Nao existe uma referencia com este id";
    }
}
