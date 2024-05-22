document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('comment-form');
    const comments = document.getElementById('comments');
    
    // Carga los comentarios almacenados en el localStorage
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.innerHTML = storedComments.map((comment) => `<div>${comment}</div>`).join('');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newComment = document.getElementById('comment').value;
        
        // Guarda el comentario en el localStorage
        const allComments = [...storedComments, newComment];
        localStorage.setItem('comments', JSON.stringify(allComments));
        
        // Actualiza la sección de comentarios con el nuevo comentario
        comments.innerHTML += `<div>${newComment}</div>`;
    });
});
let userDatta = "Fabricio"
