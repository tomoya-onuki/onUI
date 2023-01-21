window.addEventListener('load', () => {
    document.querySelector('#mytoggle')
        .addEventListener('input', (e) => {
            document.querySelector('#mytoggle-console').textContent = e.target.checked;
        });
});
