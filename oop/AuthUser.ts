export class AuthUser{
     
    constructor( name,  prenom){
        this.name = name;
         this.prenom = prenom;

    }

     getName(){
        return this.name ;
    }
    getPrenom(){
       return this.prenom;
    }
     setName(name){
         this.name = name;
    }
    setPrenom(prenom){
        this.prenom = prenom;
    }

    
}