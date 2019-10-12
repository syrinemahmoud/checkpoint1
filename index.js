const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];
//arrow
const getAge=(pet) => new Date().getFullYear() - pet.bornOn;


const petsWithAge = pets.map(pet =>{
  pet.age=getAge(pet)
  return pet
})
console.log(petsWithAge);


const dogs = pets.fliter(pet=>pet.type==="dog")
  {
 console.log(dogs);

  

let jasper=pets.find((pet)=>{ return pet.name==="jasper"})
{
  console.log(`jasper is ${jasper.age} years old');


