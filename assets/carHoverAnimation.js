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

function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.vitaCardsCarousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem)-1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.vita-controller__button--active');
    activeButtonElement.classList.remove('vita-controller__button--active');
    selectedButtonElement.classList.add('vita-controller__button--active');
}