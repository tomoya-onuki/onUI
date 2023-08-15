window.addEventListener('load', () => {

    window.addEventListener('scroll', () => {
        let flag = false;
        Array.from(document.querySelectorAll('h2')).reverse().forEach($elem => {
            const rect = $elem.getBoundingClientRect();
            const id = $elem.getAttribute('id');

            try {
                let $box = document.querySelector(`#${id}-menu`);
                if (!flag && rect.top <= 5) {
                    flag = true;
                    $box.querySelector('li').style.color = '#222';
                    $box.querySelector('li > a').style.color = '#222';
                    // $box.querySelector('li > a').style.color = '#3d98ff';
                    $box.querySelector('.sub-menu').style.display = 'block';
                } else {
                    $box.querySelector('li > a').style.color = '#999';
                    $box.querySelector('li').style.color = '#999';
                    $box.querySelector('.sub-menu').style.display = 'none';
                }
            } catch (e) {

            }
        });
    });
});