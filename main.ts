import { Chair } from "../ts/chair";
class Main {
    private manufecture: Chair[] = [];
    constructor() {
        let chairObject1 = new Chair(1, "samsung", 4, true, ["Sleeping", "Studying"])
        let chairObject2 = new Chair(2, "Wingway", 0, false, ["Sleeping"])
        let chairObject3 = new Chair(3, "mindtree", 3, true, ["Sleeping", "Dinning"])
        let chairObject4 = new Chair(4, "google", 6, true, ["Dinning", "Sleeping", "Studying"])
        let chairObject5 = new Chair(5, "Wipro", 4, true, ["Gaming", "Studying"])
        let chairObject6 = new Chair(6, "harshas", 2, true, ["Dinning", "Studying"])
        let chairObject7 = new Chair(7, "Wingway", 6, true, ["Sleeping", "Dinning"])

        let chairObject8 = new Chair();
        chairObject8.setChairId(8);
        chairObject8.setChairCompany("Apple");
        chairObject8.setNumberOfWheeles(4);
        chairObject8.setIsMovable(true);
        chairObject8.setPurpose(["Flying"])

        let chairObject9 = new Chair();
        chairObject9.setChairId(9);
        chairObject9.setChairCompany("Neelkamal");
        chairObject9.setNumberOfWheeles(4);
        chairObject9.setIsMovable(true);
        chairObject9.setPurpose(["Sleeping"])

        let chairObject10 = new Chair();
        chairObject10.setChairId(10);
        chairObject10.setChairCompany("Greenply");
        chairObject10.setNumberOfWheeles(5);
        chairObject10.setIsMovable(false);
        chairObject10.setPurpose(["ForHandicapped"])

        this.manufecture.push(chairObject1, chairObject2, chairObject3, chairObject4, chairObject5, chairObject6, chairObject7)
    }
    
    
    
          sortBynumberOfWheels(): Chair[] {
            this.manufecture.sort(function (a, b) {
                return a.getNumberOfWheels() - b.getNumberOfWheels();
            });
            return this.manufecture;
        }

    public sortChairByCompany():void
    {
        this.manufecture.sort(function (a, b) {
        if (a.getChairCompany() < b.getChairCompany())
            return -1;

        if (a.getChairCompany() > b.getChairCompany())
            return 1;

        return 0;
    });
    console.table(this.manufecture);
    }

searh():Chair[]
{
    var arr:Chair[] = [];
    this.manufecture.filter(findAll)
    function findAll(value) 
    {
    if (value.getChairCompany() == 'Wingway')
        arr.push(value);
    }
return arr;
}
}

let Object = new Main()
let result = Object.sortBynumberOfWheels();
console.table(result);

let srh = Object.searh();
console.table(srh);