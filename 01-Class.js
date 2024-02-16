/*
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}
*/

class animal{
  constructor(name,legcount,speaks){
    this.name=name;
    this.legcount = legcount;   
    this.speaks = speaks; 
  }
  speak(){
    console.log(this.speaks);
  }
}
  let dog=new animal("dog",4,"Jai Sachidanand");
  let cat=new animal("cat",4,"Simandhar Swami Na Aseem Jai Jai Kar Ho");
  cat.speak();