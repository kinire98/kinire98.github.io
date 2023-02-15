export function cardText () {
    for (const element of document.getElementsByClassName("card-subtitle")){
        const $subtitle = element;
        
        const createWord = (text, index) => {
            const word = document.createElement("span");
        
            word.innerHTML = `${text} `;
        
            word.classList.add("card-subtitle-word");
        
            word.style.transitionDelay = `${index * 40}ms`;

            return word;
        }


        const addWord = (text, index) => $subtitle.appendChild(createWord(text, index));

        const createSubtitle = text => text.split(" ").map(addWord);

        createSubtitle($subtitle.dataset.text);
    }
}

