function handleMouseEnter(){
    this.classList.add('vita-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove('vita-card--hovered');
    document.body.id = '';
} 

function addEventListenerToCards(){
    const cardElements = document.getElementsByClassName('vita-card');
    
    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener("mouseenter", handleMouseEnter );
        card.addEventListener('mouseleave', handleMouseLeave );
    }
}

document.addEventListener("DOMContentLoaded", addEventListenerToCards, false);