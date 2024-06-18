document.getElementById('newsForm').addEventListener('submit', function(event) {

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const tags = document.getElementById('tags').value;

    if(content.length < 150){
        alert('O conteúdo do texto deve ser maior ou igual a 150 caracteres');
    } else{

        event.preventDefault();

        const news = { title, content, tags };
    
        let newsList = JSON.parse(localStorage.getItem('newsList')) || [];
        newsList.push(news);
        localStorage.setItem('newsList', JSON.stringify(newsList));
    
        window.location.href = 'index.html';
    }



});

