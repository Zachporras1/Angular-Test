export class Shows {


    title!:string;
    seasons:number;
    genre:string;
    network:string;

    constructor(title:string,network:string,genre:string,seasons:number){

        this.title=title;
        this.network=network;
        this.genre=genre;
        this.seasons=seasons;
    }
}