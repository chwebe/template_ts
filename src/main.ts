console.log('App started');

const button = document.getElementById('counter');
if (button) {
    button.addEventListener('click', () => {
        const span = button.querySelector('span');
        if (span) {
            const currentCount = parseInt(span.textContent || '0', 10);
            span.textContent = (currentCount + 1).toString();
        }
    });
}
