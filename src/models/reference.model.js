export class Reference{
    constructor(id,name,biography, category,photo_url){
        this.id = Math.random() * (1000 - 1) + 1;
        this.name = name;
        this.biography = biography;
        this.category = category;
        this.photo_url = photo_url;
    }
}