console.log("invok");
const closeBtn = document.getElementById('close-btn');
const spellsBtn = document.getElementById('spells_list');
const spells = document.getElementById('spells');    
const aboutBox = document.getElementById('about-box');
const aboutBoxBtn = document.getElementById('about_list');
const imagDiv = document.getElementById('invok');
const nowSpell = document.getElementById('game-text');
const p = document.getElementById ('p');
const o = document.getElementById ('o');
const sidebar = document.getElementById ('sidebar');
const open_menu = document.getElementById ('open-btn');
var key_q ='KeyQ';
var key_w ='KeyW';
var key_e ='KeyE';
var ISspecial=false;
const Y1 = document.getElementById ('Y');
const bind = document.getElementById ('bind');
const bindText = document.getElementById ('Bind');
const Q1 =document.getElementById ('Q1');
let special=document.getElementById('special_bind');
const elements = document.querySelectorAll('.K');


let imaegObj = null;


 bindText.addEventListener ("click" , ()=>{
        spells.style.visibility = 'hidden';
        aboutBox.style.visibility = 'hidden';   

    bind.style.visibility= 'visible';
    
    }
    
);


function  hidden_bind (){
    let i = 0;
elements.forEach(BINDS => {
    BINDS.addEventListener("click", ()=> {
        
        console.log( ISspecial);

        if (ISspecial === false){
            // imaegObj = BINDS
            // BINDS = special
            //document.getElementById("Y").append(special);
        special.style.visibility='visible';
      
        special.style.top = BINDS.offsetTop+'px';
        special.style.left = BINDS.offsetLeft+'px';


special.setAttribute ('before_block', BINDS.id);

        BINDS.style.visibility='hidden';
        
        ISspecial=true;
        }else {console.log( 62)};
         
    }
    );
});
};
special.addEventListener("click" ,()=>{
    console.log( ISspecial);
console.log(elements);
    ISspecial=false;
    special.style.visibility ='hidden';
    //document.getElementById("Y").append(Q1);
    //  special = imaegObj;
     console.log(  special.getAttribute('before_block'));
     let id =special.getAttribute('before_block');
    const before_block = document.getElementById(id);
    before_block.style.visibility='visible';
    //console.log (elements.find(el => el.getAttribute("id")=== id));
    // for ( let i = 0; i<6; i++ ){
    //     if (elements[i].getAttribute("id") === id){
    //         if (i ==5){
    //            // Y1.appendChild(elements[i]);
    //             break
    //         }
    //        console.log("id: "+id) ;
    //        let number = i+1;
    //        console.log(elements[number].getAttribute('id'));
    //        //Y1.insertBefore(before_block , elements[number])
    //     }    
    // }
    //  elements.forEach(element=> {
    //     if (element.getAttribute("id") === id){
    //         console.log("id: "+id);
    //         console.log("index: "+elements.indexOf(element))
    //     }
    //  })
    //Y1.insertBefore(before_block)

});


// Q1.addEventListener("click", ()=>{
//      Q1.style.visibility="hidden";
//      special.style.visibility="visible";
//      console.log('1');


// });
hidden_bind();

var sidebar1 = false;
open_menu.addEventListener("click", ()=>{
    if (sidebar1==true){
        sidebar1=false;
        sidebar.style.left = '-250px';
        spells.style.visibility = 'hidden';
        aboutBox.style.visibility = 'hidden';
        bind.style.visibility = 'hidden';
    }else{
        sidebar1=true;
        sidebar.style.left = '0';
    }
});
spellsBtn.addEventListener('click', () => {
    aboutBox.style.visibility = 'hidden';
    spells.style.visibility = 'visible';
    bind.style.visibility = 'hidden';
});
aboutBoxBtn.addEventListener('click' , ()=> {
    spells.style.visibility = 'hidden';
    bind.style.visibility = 'hidden';

});

const magic_spells = [
    [key_q, key_w, key_e],
    [key_q, key_q, key_q],
    [key_w, key_w, key_w],
    [key_e, key_e, key_e],
    [key_q, key_q, key_e],
    [key_w, key_w, key_e],
    [key_w, key_e, key_e],
    [key_q, key_e, key_e],
    [key_q, key_q, key_w],
    [key_q, key_w, key_w],
];
var spellImage = {
    'KeyQKeyQKeyQ': `invoker-cold-snap.webp`,
    'KeyQKeyWKeyE': `invoker-deafening-blast-5390-050025ad4c4a95aec8fbcb2c46cb850fa2bbba51f2b5200024791492fef94a45.jpg`,
    'KeyQKeyQKeyE': `invoker-ice-wall-5389-5b21c01affced71613f6bf8ce5236fdde928b1d6aa2ed912329efdf6ee5581d8.jpg`,
    'KeyWKeyWKeyW': `invoker-e-m-p-5383-88e380494cbc94fecd1a5554656591537640a9bef95a47b8e632496137d69608.jpg`,
    'KeyEKeyEKeyE': `png-klev-club-cvcl-p-sferi-invokera-png-20.png`,
    'KeyWKeyEKeyE': `invoker-chaos-meteor-5385-b93d7e77232fa51479d0d1c1453d0c61bb187c055c7b05ac541ba7b809bc30d5.jpg`,
    'KeyWKeyWKeyE': `alacriti.jpg`,
    'KeyQKeyEKeyE': `invoker-forge-spirit-5387-85c20a082bc67b1892330af760affdb2ce1ccb53a1b2a90ce02f43e2028cdef9.jpg`,
    'KeyQKeyQKeyW': `image1.png`,
    'KeyQKeyWKeyW': `image2.png`
};


let currentSpellIndex = 0;
let userInput = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let shuffledSpells = shuffleArray([...magic_spells]);

function displayCurrentSpell() {
    const spellsDiv = document.getElementById('game-text');
    if (spellsDiv) {
        const spell = shuffledSpells[currentSpellIndex];
        nowSpell.innerHTML = `<img src = "imeg/${spellImage[spell.join('')]}" width = 250px >`
        console.log(`<img src = "imeg/${spellImage[spell.join('')]}">`);

    }
}

document.addEventListener("selectstart", function(ivent){
    ivent.preventDefault();
});

function spellsImage(userInput) {
    imagDiv.innerHTML = ``;
    userInput.forEach(key => {
        let image = ``;
        if (key === key_q) {
            console.log (key)
            image = `<img src="imeg/Quas_icon.webp" alt="Quas">`;
        } else if (key === key_w) {
            image = `<img src="imeg/Wex_icon.webp" alt="Wex">`;
        } else if (key === key_e) {
            image = `<img src="imeg/Exort_icon.webp" alt="Exort">`;
        }
        if (image!==``) {
             imagDiv.innerHTML += image;
       }
    });
 }


function displayCurrentImage(){
    const currentSpellCombo = shuffledSpells[currentSpellIndex]
    let imageString = '';
    
    for(let i = 0;i<=2;i++){
        imageString +=currentSpellCombo[i];
        


    }

    let image = `<img src = "imeg/${spellImage[imageString]}"  width = 250px  >`
     
     nowSpell.innerHTML = image;
}

document.addEventListener('keydown', function(event) { 
    if ([key_q, key_w, key_e].includes(event.code)) {
        userInput.push(event.code);

        if (userInput.length > 3) {
            userInput.shift();
        }
        displayCurrentSpell();
        spellsImage(userInput);
        displayCurrentImage();
    }
    else {console.log ('3')}
    if (event.code==='KeyR') {
        checkSpell();
    }
});
function areSpellsEqual(spell1, spell2) {
    if (spell1.length !== spell2.length) return false;

    const count1 = {};
    const count2 = {};

    for (let char of spell1) {
        count1[char] = (count1[char] || 0) + 1;
    }
    for (let char of spell2) {
        count2[char] = (count2[char] || 0) + 1;
    }
    
    for (let char in count1) {
        if (count1[char] !== count2[char]) return false;
    }
    
    return true;
}

function checkSpell() {
    if (userInput.length === 3) {
        const currentSpellCombo = shuffledSpells[currentSpellIndex];
        const isCorrect = areSpellsEqual(userInput, currentSpellCombo);
        
        if (isCorrect) {
            currentSpellIndex++;
            imegString = currentSpellCombo.join("");
            o.src= p.src;

            imegString = currentSpellCombo.join("");

            p.src ="imeg/"+ spellImage[imegString];
            console.log(`image spell: ${currentSpellCombo}/ src: ${spellImage[imegString]}/ p:${p}`);

          


                console.log (spellImage [currentSpellCombo]);

            if (currentSpellIndex >= shuffledSpells.length) {
                currentSpellIndex = 0;
                shuffledSpells = shuffleArray([...magic_spells]);
            }
        }

        
     
        displayCurrentSpell();
    }
  
}

aboutBoxBtn.addEventListener('click', () => {
    aboutBox.style.visibility = 'visible';
    spells.style.visibility = 'hidden';
});

displayCurrentSpell();

