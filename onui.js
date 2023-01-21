window.addEventListener('load', () => {
    new OnUI().init();
});

// HTML特殊文字を使えるようにした
const domParser = new DOMParser();
const parseHTMLcode = (code) => {
    return String(domParser.parseFromString(code, 'text/html').body.textContent)
}

class OnUI {
    constructor() {

    }

    init() {
        this.#toggleSwitch();
        this.#toggleBtn();
        this.#multiSlider();
        this.#accordion();
        this.#tab();
        this.#fontSelector();
    }

    #toggleSwitch() {
        document.querySelectorAll('.onui-toggle-switch')
            .forEach(($elem, idx) => {
                let $toggleBox = document.createElement('onui-toggle-switch-box');
                // $toggleBox.className = 'onui-toggle-switch-box';
                $elem.insertAdjacentElement("afterend", $toggleBox);

                let $tmp = $elem;
                let id = $elem.getAttribute('id');
                if (id === null) {
                    id = `onui-toggle${idx}`;
                    $elem.setAttribute('id', id);
                }
                $elem.remove();

                let $label = document.createElement('label');
                $label.className = 'check';
                $label.setAttribute('for', id);
                let $thumb = document.createElement('onui-thumb');
                $label.append($thumb);

                $toggleBox.append($tmp);
                $toggleBox.append($label);
            });
    }

    #toggleBtn() {
        document.querySelectorAll('.onui-toggle-btn')
            .forEach(($elem, idx) => {
                let $toggleBox = document.createElement('onui-toggle-btn-box');
                $elem.insertAdjacentElement("afterend",$toggleBox);

                let id = $elem.getAttribute('id');
                if (id === null) {
                    id = `onui-toggle${idx}`;
                }
                $toggleBox.removeAttribute('id');
                const text = $elem.textContent;
                $toggleBox.textContent = '';

                const $chbox = document.createElement('input');
                $chbox.setAttribute('type', 'checkbox');
                $chbox.setAttribute('id', id);
                $chbox.classList.add('toggle-btn');

                const $label = document.createElement('label');
                $label.textContent = text;
                $label.setAttribute('for', id);
                $label.classList.add('check');

                $toggleBox.appendChild($chbox);
                $toggleBox.appendChild($label);
                $elem.remove();
            });
    }

    #fontSelector() {
        document.querySelectorAll('.onui-font-selector')
            .forEach(($elem) => {
                let id = $elem.getAttribute('id') !== null ? `${$elem.getAttribute('id')}-font` : '';
                let $fontBox = document.createElement('onui-font-selector-box');
                $elem.insertAdjacentElement("afterend",$fontBox);

                // ドロップダウンリスト
                const $list = document.createElement("onui-list");

                const $label = document.createElement("onui-label");

                const $btn = document.createElement("onui-down-btn");
                $btn.textContent = parseHTMLcode("&#9660;");

                $elem.querySelectorAll('option')
                    .forEach(($item, idx) => {
                        const font = $item.getAttribute('name');
                        $item.remove();

                        const text = font.replace(/["']/g, '')
                        const $input = document.createElement('input')
                        $input.setAttribute('type', 'radio')
                        $input.setAttribute('name', id)
                        $list.appendChild($input)

                        // 最初の選択肢をデフォルトの選択肢にする
                        if (idx === 0) {
                            $item.checked = true
                            $label.textContent = text
                            $label.style.fontFamily = font
                        } else {
                            $item.checked = false
                        }

                        // ドロップダウンでみえる選択肢
                        let $listLabel = document.createElement('label')
                        $listLabel.textContent = text
                        $listLabel.setAttribute('for', String(idx))
                        $listLabel.classList.add('onui-item')
                        $listLabel.style.fontFamily = font
                        $list.appendChild($listLabel)

                        // ラジオボタンは非表示にして、上のラベルと対応させる
                        $input.setAttribute('id', String(idx))

                        // チェックが入ってるやつをデフォルトに
                        if ($input.checked) {
                            $label.textContent = text
                        }
                    });

                $fontBox.appendChild($btn);
                $fontBox.appendChild($label);
                $fontBox.appendChild($list);
                $elem.remove();

                const showList = () => {
                    if ($list.style.display = "none") {
                        $list.style.display = "block";
                    } else {
                        $list.style.display = "none";
                    }
                }
                $btn.addEventListener('click', () => showList());
                $label.addEventListener('click', () => showList());

                $list.querySelectorAll('.onui-item').forEach(function (elem, i) {
                    elem.addEventListener('click', function () {
                        let dv = document.defaultView;
                        if (dv != null) {
                            const font = dv.getComputedStyle(elem, null).fontFamily;
                            $label.style.fontFamily = font;
                        }
                        const text = String(elem.textContent);
                        $label.textContent = text;
                        $list.style.display = 'none';
                    });
                });
            });

    }
    #multiSlider() {
        document.querySelectorAll('.onui-multi-slider')
            .forEach(($elem, idx) => {
                let id = String($elem.getAttribute('id'));
                if (id === null) {
                    id = `onui-multi-slider${idx}`;
                    $elem.setAttribute('id', id);
                }
                let min = $elem.getAttribute('min');
                if (min === null) {
                    min = 0;
                    $elem.setAttribute('min', min);
                }
                let max = $elem.getAttribute('max');
                if (max === null) {
                    max = 100;
                    $elem.setAttribute('max', max);
                }
                let step = $elem.getAttribute('step');
                if (step === null) {
                    step = 1;
                    $elem.setAttribute('step', step);
                }
                let val = $elem.getAttribute('value') === null ? null : $elem.getAttribute('value').split(',')
                if (val === null) {
                    val = [min, max];
                    $elem.setAttribute('value', `${val[0]},${val[1]}`);
                }

                // 外枠
                const $sliderBox = document.createElement('onui-mulitslider-box');
                $sliderBox.setAttribute('id', id);
                $elem.insertAdjacentElement("beforebegin", $sliderBox);
                $elem.remove();

                // メインのスライダ
                const $slider0 = document.createElement('input');
                $slider0.classList.add('primary');
                $slider0.setAttribute('type', 'range');
                $slider0.setAttribute('min', min);
                $slider0.setAttribute('max', max);
                $slider0.setAttribute('step', step);
                $slider0.value = val[0];

                // サブのスライダ
                const $slider1 = document.createElement('input');
                $slider1.classList.add('secondary');
                $slider1.setAttribute('type', 'range');
                $slider1.setAttribute('min', min);
                $slider1.setAttribute('max', max);
                $slider1.setAttribute('step', step);
                $slider1.value = val[1];

                $sliderBox.appendChild($slider0);
                $sliderBox.appendChild($slider1);

                updateSlider();

                function updateSlider() {
                    const vmin = Math.min(Number($slider0.value), Number($slider1.value));
                    const vmax = Math.max(Number($slider0.value), Number($slider1.value));

                    const min = Number($slider0.getAttribute('min'));
                    const max = Number($slider0.getAttribute('max'));

                    let ratio0 = Math.round((vmin - min) / (max - min) * 100);
                    let ratio1 = Math.round((vmax - min) / (max - min) * 100);

                    $slider0.style.background = `linear-gradient(90deg, #444 ${ratio0}%, #4287f5 ${ratio0}%, #4287f5 ${ratio1}%, #444 ${ratio1}%)`;
                }
                $slider0.addEventListener('input', function (elem) {
                    updateSlider();
                })
                $slider1.addEventListener('input', function (elem) {
                    updateSlider();
                });
            });
    }

    #accordion() {
        document.querySelectorAll('.onui-accordion')
            .forEach(($elem) => {
                const id = $elem.getAttribute('id') != null ? String($elem.getAttribute('id')) : '';
                const $accordionBox = document.createElement('onui-accordion-box');
                $accordionBox.setAttribute('id', id)
                $elem.insertAdjacentElement("afterend",$accordionBox);


                $elem.querySelectorAll('option')
                    .forEach(($item, idx) => {
                        $item.classList.add('onui-accordion-item');
                        $accordionBox.appendChild($item);
                        
                        const isCheck = false;

                        const $label = document.createElement('label');
                        $label.setAttribute('for', `${id}-hide-btn${idx}`);
                        let label = $item.getAttribute('name');
                        $label.textContent = label !== undefined ? label : parseHTMLcode('&nbsp;');

                        const $btn = document.createElement('onui-hide-btn');
                        $btn.textContent = parseHTMLcode('&#9650;');

                        $label.appendChild($btn);

                        const $chbox = document.createElement('input');
                        $chbox.setAttribute('id', `${id}-hide-btn${idx}`);
                        $chbox.setAttribute('type', 'checkbox');
                        $chbox.classList.add('onui-hide-checkbox');
                        $chbox.checked = isCheck;


                        $item.insertAdjacentElement("beforebegin", $label);
                        $item.insertAdjacentElement("beforebegin", $chbox);

                        if (!isCheck) {
                            $btn.textContent = parseHTMLcode('&#9660;');
                            $item.style.display = 'none';
                        }

                        $chbox.addEventListener('input', function () {
                            const isShow = $chbox.checked;

                            $accordionBox.querySelectorAll('.onui-accordion-item').forEach(function ($elem) {
                                $elem.style.display = 'none';
                            })
                            $accordionBox.querySelectorAll('.onui-hide-checkbox').forEach(function ($elem) {
                                $elem.checked = false;
                            })
                            $accordionBox.querySelectorAll('onui-hide-btn').forEach(function ($elem) {
                                $elem.textContent = parseHTMLcode('&#9660;');
                            })

                            $chbox.checked = isShow
                            if (isShow) {
                                $btn.textContent = parseHTMLcode('&#9650;');
                                $item.style.display = 'block';
                            } else {
                                $btn.textContent = parseHTMLcode('&#9660;');
                                $item.style.display = 'none';
                            }
                        });
                    });

                $elem.remove();
            });

    }



    #tab() {
        document.querySelectorAll('.onui-tab')
            .forEach(($elem) => {
                const id = $elem.getAttribute('id') != null ? String($elem.getAttribute('id')) : ''
                const $tabBox = document.createElement('onui-tab-box');
                $tabBox.setAttribute('id', id)
                $elem.insertAdjacentElement("afterend",$tabBox);

                const $selectors = document.createElement('onui-selectors');
                $tabBox.insertAdjacentElement('afterbegin', $selectors);

                $elem.querySelectorAll('option')
                    .forEach(($item, idx) => {
                        $item.classList.add('onui-tab-item');
                        $tabBox.appendChild($item);

                        // セレクタ
                        const $selectorBox = document.createElement('onui-selector-box');

                        const $label = document.createElement('label');
                        $label.setAttribute('for', `${id}-tab-btn${idx}`);
                        $label.classList.add('onui-tab-label');
                        let label = $item.getAttribute('name');
                        $label.textContent = label !== undefined ? label : parseHTMLcode('&nbsp;');

                        const $radioBtn = document.createElement('input');
                        $radioBtn.setAttribute('id', `${id}-tab-btn${idx}`);
                        $radioBtn.setAttribute('type', 'radio');
                        $radioBtn.setAttribute('name', id);
                        if (idx === 0) {
                            $radioBtn.checked = true;
                        } else {
                            $radioBtn.checked = false;
                        }


                        $selectorBox.appendChild($radioBtn);
                        $selectorBox.appendChild($label);
                        $selectors.append($selectorBox);

                        if (!$radioBtn.checked) {
                            $item.style.display = 'none';
                        }

                        $radioBtn.addEventListener('input', function () {
                            const isShow = $radioBtn.checked;

                            $tabBox.querySelectorAll('.onui-tab-item').forEach(function ($elem) {
                                $elem.style.display = 'none';
                            });

                            if (isShow) {
                                $item.style.display = 'block';
                            } else {
                                $item.style.display = 'none';
                            }
                        });

                    });

                $elem.remove();
            });
    }
}