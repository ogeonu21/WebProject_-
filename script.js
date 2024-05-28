document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.bubbly-button');
    const initializeCounts = () => {
        likeButtons.forEach(button => {
            const id = button.dataset.id;
            const count = localStorage.getItem(`like-count-${id}`) || 0;
            document.getElementById(`like-count-${id}`).textContent = count;
        });
    };
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;
            let count = parseInt(localStorage.getItem(`like-count-${id}`) || 0, 10);
            button.classList.add('active');
            setTimeout(() => {
                button.classList.remove('active');
            }, 1000);
            count += 1;
            localStorage.setItem(`like-count-${id}`, count);
            document.getElementById(`like-count-${id}`).textContent = count;
        });
    });
    initializeCounts();
});
