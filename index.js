"use strict";

function setHeading() {
    document.getElementById('ad').appendChild(document.createTextNode('After Dark!'))
    document.title = 'nothing much.';
    const h = document.getElementById('h')
    document.title.split("").forEach((c, i) => {
        const el = document.createElement('span');
        el.appendChild(document.createTextNode(c));
        el.classList.add('o0');
        h.appendChild(el);
        setTimeout(() => {
            el.classList.remove('o0');
            if (c !== ' ') setTimeout(() => dim(el), Math.min(Math.random() * 2000, 500));
        }, (i + 1) * 100);
    });
}

function dim(el) {
    if (!el.className.includes('blue') && Math.random() > 0.9) {
        el.classList.add('blue');
        setTimeout(() => el.classList.remove('blue'), Math.min(Math.random() * 2_500, 500));
    }

    if (!el.className.includes('flicker') && Math.random() > 0.99) {
        el.classList.remove('dim');
        el.classList.add('flicker');
        setTimeout(() => {
            el.classList.remove('flicker');
            dim(el);
        }, Math.min(1_000, Math.random() * 5_000));
    } else if (!el.className.includes('dim') && Math.random() > 0.5) {
        el.classList.add('dim');
        setTimeout(() => {
            el.classList.remove('dim');
            dim(el);
        }, Math.min(Math.random() * 1000, 500));
    } else {
        setTimeout(() => dim(el), Math.random() * 20_000);
    }
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
                alert('i would like to pay for the repairs to the Deluxo.');
                pressedCodes = [...keyCodes];
            }
        } else if (pressedCodes.length !== keyCodes) {
            pressedCodes = [...keyCodes];
        }
    });
}


document.addEventListener('DOMContentLoaded', onLoad);
