/*
    Liten enkel julkalender.
    Tobias Jansson, 2020.

    https://github.com/jatocode/julkalender
*/

document.addEventListener("DOMContentLoaded", () => {
    skapaluckor();
    kalender();
});

function slumpaluckor() {
    let luckordning = JSON.parse(localStorage.getItem('luckordning'));
    if (luckordning == undefined) {
        luckordning = [];
        while (luckordning.length < 23) {
            let dag = getRandomInt(23) + 2;
            if (!luckordning.includes(dag)) luckordning.push(dag);
        }
        localStorage.setItem('luckordning', JSON.stringify(luckordning));
    }
    return luckordning;
}

function skapaluckor() {
    let kal = document.getElementById('kalender');
    let lucka1 = document.getElementsByClassName('jul')[0];
    slumpaluckor().forEach(x => {
        const l = lucka1.cloneNode(true);
        let fram = l.querySelector('.fram');
        fram.textContent = x;
        fram.id = x;
        kal.append(l);
    });
}

function kalender() {
    let luckor = [...document.getElementsByClassName('jul')];
    luckor.forEach(el => {
        el.onclick = (e) => {
            let lucka = e.target.parentElement;
            lucka.style.zIndex = lucka.style.zIndex == 100 ? 0 : 100;
            if (e.target.id > new Date().getDate()) {
                e.preventDefault();
                e.stopPropagation();
            } else if (e.target.id != '') {
                let bak = el.querySelector('.bak');
                bak.textContent = window.atob(ktexter[(e.target.id - 1) % ktexter.length]);
            }
        }
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const ktexter = [
'J0RyaWNrIGdsw7ZnZyBvY2ggw6R0IHBlcHBhcmtha29yJyw=',
'J1JlcGV0aXRpdiBvY2ggdHLDpWtpZyBhcmJldHNzaXR1YXRpb24sIGbDtnJiw6R0dHJhcyBzbmFiYnQgbWVkIGVuIGF1dG9tYXRpb24nLA==',
'J0fDpSB1dCBvY2ggbmp1dCBhdiBsanVzZXQgdW5kZXIgbHVuY2hlbics',
'J1NlIGVuIGp1bGZpbG0nLA==',
'J1Nrcml2IGV0dCByaW0gb20gdXR2ZWNrbGluZ3NlbmhldGVuIG9jaCBsw6RnZyBpIHbDpXIgc29jaWFsYSBrYW5hbCcs',
'J0tva2Ega27DpGNrJyw=',
'J1NqdW5nIGVuIGp1bHPDpW5nIGbDtnIgZW4ga29sbGVnYSBlbGxlciB2w6RuJyw=',
'J1TDpG5kIGV0dCBsanVzIG9jaCBsw6RzIGVuIGJvayBpIGx1Z24gb2NoIHJvJyw=',
'J0x1Y2lhIC0gc251cnJhIGdsaXR0ZXIgcnVudCBtw7Zzc2FuIG9jaCB0YSBlbiBwcm9tZW5hZCcs',
'JzE3IC0gRnJlZGFnc2Zpa2EgbWVkIGtvbGxlZ29ybmEnLA==',
'J05vYmVsZGFnZW4gLSBmaXJhIHN0b3J0IG1lZCBidWJiZWwgb2NoIG1lZGFsamVyJyw=',
'J1Nrcml2IHJpbSB0aWxsIGVuIGp1bGtsYXBwJyw=',
'J1B5bnRhIHbDpXIgcHJvamVrdGjDtnJuYSBtZWQgZW4gdG9tdGUsIHN0asOkcm5hIGVsbGVyIGp1bGt1bGEnLA==',
'J1JpdGEsIHNrYXBhLCBtw6VsYSwgZm9ybWEsIHNtaWQgZW4gdG9tZSBvY2ggZm90YScs',
'wrRCYWthIG7DpWdvdCBnb3R0wrQs',
'wrQ5IC0gR3JhdHRpcyBUb21teSBvY2ggQW5uYcK0LA==',
'wrRTZSBlbiBicmEgZmlsbS9zZXJpZcK0LA==',
'wrRTa8OkbmsgZW4gZ8OldmEgdGlsbCB2w6RsZ8O2cmVuaGV0wrQs',
'wrTDhHQgZGFnZW5zIGx1bmNoIGkgc2tvZ2VuwrQs',
'wrRMYWdhIGVuIGV4dHJhIGdvZCBtaWRkYWfCtCw=',
'wrRUYSBlbiBwcm9tZW5hZCBtZWQgZW4gdsOkbsK0LA==',
'wrRHw7ZyIG7DpWdvbiBnbGFkwrQs',
'wrREZXQgdmkgaW50ZSBnw7ZyIGlkYWcgLSBzbGlwcGVyIHZpIGfDtnJhIG9tIGltb3Jnb27CtCw=',
'wrQyNCAtIEdvZCBKdWwhwrQs'
]
