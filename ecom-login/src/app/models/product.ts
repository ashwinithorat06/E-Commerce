
export class Product {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price:number;

    constructor(id,name,description='',price=0,imageUrl='https://www.thespruceeats.com/thmb/LV4VRAPdilCLCQj7mi4m8PFxczI=/2164x1386/filters:fill(auto,1)/freshvegetablesAlexRaths-4c1ea186a88e4fd7b95283eee614600c.jpg'){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.imageUrl=imageUrl;
    }
    // constructor(id,name,description='',price=0,imageUrl= ('G:\AngularProj\eCom1\src\assets\B3.jpg')){
    //     this.id=id;
    //     this.name=name;
    //     this.description=description;
    //     this.price=price;
    //     this.imageUrl=imageUrl;
    // }
}
