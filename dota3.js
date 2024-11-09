console.log("invok");
const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const spellsBtn = document.getElementById('spells_list');
const spells = document.getElementById('spells');    
const aboutBox = document.getElementById('about-box');
const aboutBoxBtn = document.getElementById('about_list');

    openBtn.addEventListener('click', () =>{
    console.log('open');
    sidebar.style.left = '0';
});
closeBtn.addEventListener('click', () => {
    console.log('close');
    sidebar.style.left = '-250px';
    spells.style.visibility = 'hidden';
    aboutBox.style.visibility = 'hidden';
});



spellsBtn.addEventListener('click', ()=>{
    aboutBox.style.visibility ='hidden';
    spells.style.visibility = 'visible';

});

let spell = ['q', 'w', 'e'];
 
const magic_spells = [
    ['q', 'w', 'e'],
    ['q', 'q', 'q'],
    ['w', 'w', 'w'],
    ['e', 'e', 'e'],
    ['q', 'e', 'w']
]

let currentSpellIndex = 0;
let userInput = [];
let currentSpell = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
 [array[i], array[j]] = [array[j], array[i]];}
return array;
}
let shuffledSpells = shuffleArray([...magic_spells]);

function displayCurrentSpell() {
    const spellsDiv = document.getElementById('game');
    if (spellsDiv) {
    spellsDiv.innerHTML = `
    <div>now spelling: ${shuffledSpells[currentSpellIndex].join('')}</div>
    <div>your text: ${userInput.join('')}</div>
    `;
    }
}
             
document.addEventListener('keydown', function(event) { 
    if (['q', 'w', 'e'].includes (event.key)) {
        userInput.push(event.key);
     if (userInput.length > 3) {
          userInput.shift();
    }
    displayCurrentSpell();
    }

    if (event.key.toLowerCase() === 'r') {
    checkSpell();
    }
});

function checkSpell() {
    if (userInput.length== 3) {
        const currentSpellCombo = shuffledSpells [currentSpellIndex];
        const isCorrect = userInput.every((key, index) => key === currentSpellCombo [index]);
    
        if (isCorrect) {
    
            currentSpellIndex++;
        if (currentSpellIndex >= shuffledSpells.length) {
    console.log("Win")
    currentSpellIndex = 0;
    shuffledSpells = shuffleArray([...magic_spells]);
        }
    } else {
    
    }

    userInput = [];
    displayCurrentSpell();
    }
}

aboutBoxBtn.addEventListener('click' , ()=>{
     aboutBox.style.visibility = 'visible';
     spells.style.visibility = 'hidden';
});



   displayCurrentSpell();

