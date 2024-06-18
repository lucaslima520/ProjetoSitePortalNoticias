document.addEventListener("DOMContentLoaded", function() {
    const maxTitleLength = 50;
    const maxTextLength = 150;

    function truncateText(selector, maxLength) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            let originalText = element.textContent;
            if (originalText.length > maxLength) {
                element.textContent = originalText.slice(0, maxLength) + '...';
            }
        });
    }

    function loadNews() {
        const newsContainer = document.getElementById('newsContainer');
        const newsList = JSON.parse(localStorage.getItem('newsList')) || [];

        newsList.forEach(news => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.width = '28rem';

            const cardBody = `
                <img src="assets/images/Tecnologia.jpg" class="card-img-top custom-image-size" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.content}</p>
                    <a href="detalhe.html" class="btn btn-primary view-more" data-title="${news.title}" data-content="${news.content}">Ver mais</a>
                </div>
            `;
            card.innerHTML = cardBody;
            newsContainer.appendChild(card);
        });

        truncateText('.card-title', maxTitleLength);
        truncateText('.card-text', maxTextLength);
    }

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('view-more')) {
            const title = event.target.getAttribute('data-title');
            const content = event.target.getAttribute('data-content');
            const selectedNews = { title, content };
            localStorage.setItem('selectedNews', JSON.stringify(selectedNews));
        }
    });

    loadNews();
    truncateText('.card-title', maxTitleLength);
    truncateText('.card-text', maxTextLength);
});



