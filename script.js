//좋아요 기능
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
//스크롤 버튼
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
//게시판 제목 애니메이션
document.addEventListener('DOMContentLoaded', () => {
    const targets = [
        document.getElementById('highlight_Top'),
        document.getElementById('highlight_Middle'),
        document.getElementById('highlight_Bottom')
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.5
    });

    targets.forEach(target => observer.observe(target));
});
