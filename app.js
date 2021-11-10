// OOP Exercise

// 1a
console.log(`===Number 1===`);
const mulan ={
    title: `Mulan`,
    main: `Fa Mulan`,
    // 1b
    quote: () =>    
        `Dishonor! Dishonor on your whole family!`,
    // 1c
    storyline: function () {
    return `The movie ${this.title} is about ${this.main}`;
    } 
};
console.log(mulan.quote());
console.log(mulan.storyline());

// 2a.
console.log(`===Number 2===`);
const tangled ={
    title: `Tangled`,
    main:   `Rapunzel`,
    // 2b
    quote: () =>    
        `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`,
    // 2c
    storyline: function () {
    return `The movie ${this.title} is about ${this.main}`;
    } 
}

console.log(tangled.quote());
console.log(tangled.storyline());

// 3a
console.log(`===Number 3===`);
function disneyMovie (t, m){
    this.title = t;
    this.main = m;
}
// 3b    
    disneyMovie.prototype.storyline = function(){
    return `The movie ${this.title} is about ${this.main}`;
    }
// 3c 
    const mulan1 = new disneyMovie(`Mulan`, `Fa Mulan`);
console.log(mulan1.storyline());

// 3d
    const tangled1 = new disneyMovie(`Tangled`, `Rapunzel`);
console.log(tangled1.storyline());

// 4a.
console.log(`===Number 4===`);
class DM {
    constructor (t, m){
        this.title = t;
        this.main = m;
}
// 4b
storyline (){
    return `The movie ${this.title} is about ${this.main}`;
    }
    // 4e
    static loveDisneyMovies(){
    return `I love Disney Movies!`;
    }   
}
// 4c
const mulan2  = new DM(`Mulan`,`Fa Mulan`);
console.log(mulan2.storyline());
// 4d
const tangled2  = new DM(`Tangled`,`Rapunzel`);
console.log(tangled2.storyline());
// 4f
console.log(DM.loveDisneyMovies());

console.log(`===Number 5===`);
// 5a
class DMCast extends DM {
    constructor(t, m, c){
        super(t, m);
        this.cast = c;
    
    const cast = {
       mulan: `Ming-Na Wen`, 
       mushu: `Eddie Murphy`, 
       shang: `BD Wong`, 
       theEmperor: `Pat Morita`,
       
    };  
  }
}


