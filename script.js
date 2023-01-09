'use strict'
const imgElement = document.getElementsByTagName('img')[0];
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');
let form = document.getElementById('countryTraits');
imgElement.style.height = '30px';
imgElement.style.width = '50px';

const countrys = {
    countryInfo: [
        {
            name: 'Uganda',
            capital: 'Kampala',
            currency: 'Ugandan Shilling',
            language: 'English',
        },
        {
            name: 'Cambodia',
            capital: 'Phnom Penh',
            currency: 'Riel',
            language: 'Khmer',
        },
        {
            name: 'Sweden',
            capital: 'Stockholm',
            currency: 'Krona',
            language: 'Swedish',
        },
    ],
    flagArray: [
        'img/uganda.png',
        'img/cambodia.png',
        'img/sweden.png',
    ],
    displayCountry: function (i) {
        const listInfo = document.getElementsByTagName('li');
        listInfo[0].innerHTML = `Name: ${this.countryInfo[i].name}`;
        listInfo[1].innerHTML = `Capital: ${this.countryInfo[i].capital}`;
        listInfo[2].innerHTML = `Currency: ${this.countryInfo[i].currency}`;
        listInfo[3].innerHTML = `Language: ${this.countryInfo[i].language}`;
        imgElement.setAttribute('src', countrys.flagArray[i]);
    },
    addCountry: function() {
        this.pushCountry(newName.value, newCapital.value, newCurrency.value, newLanguage.value);
    },
    pushCountry: function (newName, newCapital, newCurrency, newLanguage) {
        this.countryInfo.push({
            name: newName,
            capital: newCapital,
            currency: newCurrency,
            language: newLanguage,
        })
    },
} 
window.addEventListener('load', function(){
    countrys.displayCountry(0);
})

form.addEventListener('submit', event => {
    event.preventDefault();
    countrys.addCountry();
    alert('submitted');
});



let clicks = 1;
nextButton.addEventListener('click', function(event){
    clicks++;
    if(clicks > countrys.countryInfo.length){
        countrys.displayCountry(0); 
        clicks = 1; 
    }
    for (let i = 0; i < clicks; i++) {
        countrys.displayCountry(i);    
    }
});
previousButton.addEventListener('click', function(){
    clicks--;
    if(clicks === 0){
        clicks = countrys.countryInfo.length;
    }
    for (let i = 0; i < clicks; i++) {
        countrys.displayCountry(i);
    }
});

function editTrue() {
    document.getElementById("info-list").contentEditable = true;
  }
function editFalse() {
    document.getElementById("info-list").contentEditable = false;
}

function getSelectValue() {
    let selectedValue = document.getElementById("chooseCountrys").value;
    if (selectedValue === "uganda") {
        countrys.displayCountry(0);
    } else if (selectedValue === "cambodia"){
        countrys.displayCountry(1);
    } else if (selectedValue === "sweden"){
        countrys.displayCountry(2);
    }
} 

chooseCountrys.addEventListener('change', function(){
    getSelectValue();
});
