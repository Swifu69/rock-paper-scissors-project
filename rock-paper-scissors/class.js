
export class Choice{
    #name 
    #Weakness
    constructor(name, weakness) {
        this.#name = name;
        this.#weakness = beaten;
    }
    get name(){
        return this.#name.toLowerCase().trim();

    }
    get weakness(){
        return this.#weakness.toLowerCase().trim();
    }
}
