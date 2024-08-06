const flagsElement = document.querySelector('#flags');
const textsToChange = document.querySelectorAll('[data-section]');

//Escuchar el cambio de checkbox y le cambia el data-language
flagsElement.addEventListener('change',(e)=> {
    if (e.target.checked) {
        flagsElement.setAttribute('data-language','esp')
        /* console.log(e.target.dataset.language); */
        changeLanguages(e.target.dataset.language)
    } else {
        flagsElement.setAttribute('data-language','eng')
        /* console.log(e.target.dataset.language); */
        changeLanguages(e.target.dataset.language)
    }
});



const changeLanguages = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for( const textToChange of textsToChange) {
        const section = textToChange.dataset.section

        const value = textToChange.dataset.value

        textToChange.textContent = texts[section][value]
    }
}