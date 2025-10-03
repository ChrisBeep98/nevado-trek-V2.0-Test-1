import { reviews } from './reviews.js';

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.section-project .card');
    const totalCards = 12;

    cards.forEach((card, index) => {
        if (index >= totalCards) return;

        const review = reviews[index];

        // Update avatar image
        const avatarImg = card.querySelector('.media__avatar__background');
        if (avatarImg) avatarImg.src = review.photoUrl;

        // Update name
        const name = card.querySelector('.media__content__title');
        if (name) name.textContent = review.name;

        // Update subtitle
        const subtitle = card.querySelector('.media__content__text');
        if (subtitle) subtitle.textContent = review.subtitle;

        // Update rating
        const ratingDiv = card.querySelector('.card-header-text');
        if (ratingDiv) ratingDiv.textContent = review.rating.toString();

        // Update review text
        const reviewText = card.querySelector('.card-text') || card.querySelector('.body-medium');
        if (reviewText) reviewText.textContent = '"' + review.review.replace(/^\(có `/g, '').replace(/`$/g, '') + '"';
    });
});
