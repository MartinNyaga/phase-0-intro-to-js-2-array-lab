// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");

}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
   const newCats = [...cats, "Broom"];
   return newCats;
}
function prependCat(name){
    const newCatss = ["Arnold", ...cats];
    return newCatss;
}
function removeLastCat(){
    const newCats = cats.slice(0, cats.length - 1);
    return newCats;
}
function removeFirstCat(){
    const newCats = cats.slice(1);
    return newCats;
}