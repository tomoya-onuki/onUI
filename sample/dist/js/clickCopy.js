window.addEventListener('load', () => {
    document.querySelectorAll('.copy-btn-box')
        .forEach($copyBtnBox => {
            $copyBtnBox.addEventListener('click', () => {
                let $copyMsg = $copyBtnBox.querySelector('.copy-msg');
                $copyMsg.style.display = 'inline-block';
                
                let ms = 1000;
                $copyMsg.style.transition = "opacity " + ms + "ms";
                setTimeout(() => $copyMsg.style.opacity = 0, 700);
                setTimeout(() => {
                    $copyMsg.style.opacity = 1;
                    $copyMsg.style.display = "none";
                }, ms);

                let $pre = $copyBtnBox.previousElementSibling;
                let $code = $pre.querySelector('code');
                navigator.clipboard.writeText($code.textContent);
            });
        });
});