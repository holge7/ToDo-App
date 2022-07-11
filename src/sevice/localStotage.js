export default class localStorageService{
    constructor(from){
        this.storage = window.localStorage;
        this.from = from;
    }

    get(){
        return this.storage.getItem(this.from)
    }

    save(data){
        this.storage.setItem(this.from, JSON.stringify(data))
    }
    
}