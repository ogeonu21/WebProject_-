document.addEventListener('DOMContentLoaded', function() {
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    const likeCount = document.getElementById('likeCount');
    const dislikeCount = document.getElementById('dislikeCount');

    likeBtn.addEventListener('click', function() {
        vote('like');
    });

    dislikeBtn.addEventListener('click', function() {
        vote('dislike');
    });

    function vote(type) {
        fetch('/vote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
            } else {
                likeCount.textContent = data.likes;
                dislikeCount.textContent = data.dislikes;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
