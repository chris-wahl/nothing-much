"use strict";

function setTime(el, multiplier = 30, min = 0) {
    const newTime = Math.max(Math.random() * multiplier, min);
    el.style.setProperty('--animation-time', newTime + 's');
    setTimeout(() => setTime(el, multiplier, min), (newTime + Math.random() * 5) * 1_000);
}

function setBlue(el) {
    if (!el.className.includes('blue') && Math.random() > 0.9) {
        el.classList.add('blue');
        setTimeout(() => {
            el.classList.remove('blue');
            setBlue(el);
        }, Math.min(Math.random() * 2_500, 500));
    } else {
        setTimeout(() => setBlue(el), Math.random() * 30 * 1000)
    }
}

function setHeading() {
    document.getElementById('ad').appendChild(document.createTextNode('After Dark!'))
    const h = document.getElementById('h')
    document.title = 'nothing much.';
    document.title.split("").forEach((c, i) => {
        const el = document.createElement('span');
        el.appendChild(document.createTextNode(c));
        el.classList.add('o0');
        h.appendChild(el);
        setTimeout(() => {
            el.classList.remove('o0');
            setTimeout(() => {
                el.classList.add('newDim');
                setTime(el);
                setBlue(el);
            }, 500);

        }, (i + 1) * 200);
    });
    setTime(h, 100, 30);
}

function ad() {
    const b = document.querySelector('body')
    b.classList[b.className.includes('dark') ? 'remove' : 'add']('dark');
}

function setBody(b, str, delay = 250) {
    b = document.getElementById(b);
    str.split('').forEach((c, i) => {
        const el = document.createElement('span');
        el.appendChild(document.createTextNode(c));
        el.classList.add('o0');
        b.appendChild(el);
        setTimeout(() => el.classList.remove('o0'), delay * (i + 1));
    });
}

function onLoad() {
    const delay = 20_000;
    const keyCodes = ['ArrowUp', 'ArrowUp', 'ArrowDown', "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA", "Enter"];
    let pressedCodes = [...keyCodes];
    setHeading();
    setTimeout(() => setBody('b1', 'Well...'), delay);
    setTimeout(() => setBody('b2', 'What more were you expecting?', 100), delay * 2);

    h.addEventListener('click', ad);
    if (Math.random() > 0.999) ad();

    window.addEventListener('keydown', (event) => {
        if (pressedCodes.length > 0 && event.code === pressedCodes[0]) {
            pressedCodes.shift();
            if (pressedCodes.length === 0) {
                alert('I would like to pay for the repairs to the Deluxo.');
                ad();
                pressedCodes = [...keyCodes];
            }
        } else if (pressedCodes.length !== keyCodes) {
            pressedCodes = [...keyCodes];
        }
    });
}


document.addEventListener('DOMContentLoaded', onLoad);
