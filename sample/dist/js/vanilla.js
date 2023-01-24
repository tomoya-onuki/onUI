window.addEventListener('load', () => {
    document.querySelector('#mytoggle')
        .addEventListener('input', function (e) {
            document.querySelector('#mytoggle-console').textContent = this.checked;
            console.log(this.checked);
        });
    document.querySelector('#mytogglebtn')
        .addEventListener('input', function (e) {
            document.querySelector('#mytogglebtn-console').textContent = this.checked;
            console.log(this.checked);
        });

    var myslider = document.querySelector('#myslider');
    document.querySelector('#myslider > .onui-min')
        .addEventListener('input', function (e) {
            document.querySelector('#myslider-console').textContent = myslider.value;
            console.log(myslider.value);
        });
    document.querySelector('#myslider > .onui-max')
        .addEventListener('input', function (e) {
            document.querySelector('#myslider-console').textContent = myslider.value;
            console.log(myslider.value);
        });


    document.querySelector('#myfontselector > onui-options')
        .addEventListener('click', function (e) {
            document.querySelector('#myfontselector-console').style.fontFamily = this.getAttribute('font');
            console.log('%csample text', `font-family:${this.getAttribute('font')}`);
        });
});
