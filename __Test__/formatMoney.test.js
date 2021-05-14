import formatMoney from '../lib/formatMoney';
import { isType } from 'graphql';

function Person(name,foods){
    this.name = name;
    this.foods = foods;

}
Person.prototype.fetchData = ()=> /*new Promise(
    (resolve,reject)=>{
        setTimeout(()=> resolve(this.foods),2000);
    });*/
    new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(this.foods),2000);
    })

describe("What is mocking",()=>{
    xit("Mocking API",()=>{
       const fetchDogs = jest.fn();
       fetchDogs("snickers");
       expect(fetchDogs).toHaveBeenCalled();
       expect(fetchDogs).toHaveBeenCalledWith("snickers");
       //console.log(fetchDogs);
    })
    xit("Can create a person",()=>{
        const me = new Person("Wes",["Pizza"]);
        expect(me.name).toBe("Wes")
    });
    xit("Can fetch foods",async()=>{
        const me = new Person("Wes",["Pizza","Test"]);
        //me.fetchData = jest.fn().mockResolvedValue(['sushi','noodles']);
        me.fetchData = jest.fn().mockResolvedValue(['sushi','noodles']);
        //const foodData = await me.fetchData();
        const foodData = await me.fetchData();
        expect(foodData).toContain("sushi");
    })
})