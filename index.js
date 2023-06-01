const cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat() {
    cats.push("Ralph");};

function destructivelyPrependCat() {
    cats.unshift("Bob");};

function destructivelyRemoveLastCat() {
    cats.pop(-0);};

function destructivelyRemoveFirstCat() {
    cats.shift(0);};

function appendCat() {
    
    const coolcats = [...cats, "Broom"];

    return coolcats 
    };

function prependCat() {
    
    const thecoolcats = ["Arnold", ...cats];
    
    return thecoolcats
    };

function removeLastCat() {
    const catsnohats = 
    cats.slice(0,-1);
return catsnohats};

function removeFirstCat() {
    const castwithhats =
        cats.slice(-2);
    return castwithhats};