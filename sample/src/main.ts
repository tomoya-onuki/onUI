window.addEventListener('load', () => {
    const mytoggle: HTMLInputElement = <HTMLInputElement>document.querySelector('#mytoggle2');
    const console0: HTMLElement = <HTMLElement>document.querySelector('#mytoggle2-console');
    mytoggle.addEventListener('input', function (e) {
        console0.textContent = String(this.checked);
        console.log(this.checked);
    });


    const mytoggleBtn: HTMLInputElement = <HTMLInputElement>document.querySelector('#mytogglebtn2');
    const console1: HTMLElement = <HTMLElement>document.querySelector('#mytogglebtn2-console');
    mytoggleBtn.addEventListener('input', function (e) {
        console1.textContent = String(this.checked);
        console.log(this.checked);
    });

    const myslider: HTMLInputElement = <HTMLInputElement>document.querySelector('#myslider2');
    const mysliderMin: HTMLInputElement = <HTMLInputElement>myslider.querySelector('.onui-min');
    const mysliderMax: HTMLInputElement = <HTMLInputElement>myslider.querySelector('.onui-max');
    const console2: HTMLElement = <HTMLElement>document.querySelector('#myslider2-console');
    mysliderMin.addEventListener('input', function (e) {
        console2.textContent = String(myslider.value);
        console.log(myslider.value);
    });
    mysliderMax.addEventListener('input', function (e) {
        console2.textContent = String(myslider.value);
        console.log(myslider.value);
    });

    const myfontselector: HTMLElement = <HTMLElement>document.querySelector('#myfontselector2 > onui-options');
    const console3: HTMLElement = <HTMLElement>document.querySelector('#myfontselector2-console');
    myfontselector.addEventListener('click', function (e) {
        console3.style.fontFamily = String(this.getAttribute('font'));
        console.log('%csample', `font-family:${this.getAttribute('font')}`);
    });
});