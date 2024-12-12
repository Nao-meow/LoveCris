function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';

    const size = Math.random() * 20 + 30;
    heart.style.setProperty('--size', `${size}px`);

    heart.style.setProperty('--x-offset', (Math.random() - 0.5) * 2);
    document.getElementById('background-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 200);

function openNewFile() {
    window.location.href = 'next_page_one.html';
}

function openNewFileTwo() {
    window.location.href = 'next_page_two.html';
}

function openNewFileThree() {
    window.location.href = 'think.html';
}

function openNewFileFour() {
    window.location.href = 'next_page_three.html';
}

function openNewFileFive() {
    window.location.href = 'next_page_four.html';
}
