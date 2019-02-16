 export class Chair
 {
     private chair_id:number;
     private chair_company:string;
     private numberOfWheels:number;
     private isMovable:boolean;
     private purpose:string[];

     constructor(chair_id?:number,chair_company?:string,numberOfWheels?:number,isMovable?:boolean, purpose?:string[])
     {
        this.chair_id=chair_id;
        this.chair_company=chair_company;
        this.numberOfWheels=numberOfWheels;
        this.isMovable=isMovable;
        this.purpose=purpose;
     }
     public setChairId(chair_id:number):void
     {
         this.chair_id=chair_id;
     }
     public getChairId():number
     {
         return this.chair_id;
     }


     public setChairCompany(chair_company:string):void
     {
         this.chair_company=chair_company;
     }
     public getChairCompany():string
     {
         return this.chair_company;
     }


     public setNumberOfWheeles(numberOfWheels:number):void
     {
        this.numberOfWheels=numberOfWheels;
     }
     public getNumberOfWheels():number
     {
        return this.numberOfWheels;
     }

     public setIsMovable(isMovable:boolean)
     {
         this.isMovable=isMovable;
     }
     public getIsMovale():boolean
     {
        return this.isMovable;
     }

     public setPurpose(purpose:string[])
     {
         this.purpose=purpose;
     }
     public getPurpose():string[]
     {
        return this.purpose;
     }
     }
