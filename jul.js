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
            let now = new Date();
            if (now.getMonth() != 11 || e.target.id > now.getDate()) {
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
'RHJpY2sgZ2z2Z2cgb2NoIOR0IHBlcHBhcmtha29y',
'UmVwZXRpdGl2IG9jaCB0cuVraWcgYXJiZXRzc2l0dWF0aW9uIGb2cmLkdHRyYXMgc25hYmJ0IG1lZCBlbiBhdXRvbWF0aW9u',
'R+UgdXQgb2NoIG5qdXQgYXYgbGp1c2V0IHVuZGVyIGx1bmNoZW4=',
'U2UgZW4ganVsZmlsbQ==',
'U2tyaXYgZXR0IHJpbSBvbSB1dHZlY2tsaW5nc2VuaGV0ZW4gb2NoIGzkZ2cgaSB25XIgc29jaWFsYSBrYW5hbA==',
'S29rYSBrbuRjaw==',
'U2p1bmcgZW4ganVsc+VuZyBm9nIgZW4ga29sbGVnYSBlbGxlciB25G4=',
'VORuZCBldHQgbGp1cyBvY2ggbORzIGVuIGJvayBpIGx1Z24gb2NoIHJv',
'R3JhdHRpcyBUb21teSBvY2ggQW5uYQ==',
'Tm9iZWxkYWdlbiAtIGZpcmEgbWVkIGJ1YmJlbCBvY2ggbWVkYWxqZXIuIEdyYXR0aXMgTWFsaW4h',
'U2tyaXYgcmltIHRpbGwgZW4ganVsa2xhcHA=',
'UHludGEgduVyIHByb2pla3Ro9nJuYSBtZWQgZW4gdG9tdGUgc3Rq5HJuYSBlbGxlciBqdWxrdWxh',
'THVjaWEgLSBzbnVycmEgZ2xpdHRlciBydW50IG32c3NhbiBvY2ggdGEgZW4gcHJvbWVuYWQ=',
'Uml0YSBza2FwYSBt5WxhIGZvcm1hIHNtaWQgZW4gdG9tdGUgb2NoIGZvdGE=',
'QmFrYSBu5WdvdCBnb3R0',
'U2UgZW4gYnJhIGZpbG0vc2VyaWU=',
'RnJlZGFnc2Zpa2EgbWVkIGtvbGxlZ29ybmE=',
'U2vkbmsgZW4gZ+V2YSB0aWxsIHbkbGf2cmVuaGV0',
'xHQgZGFnZW5zIGx1bmNoIGkgc2tvZ2Vu',
'TGFnYSBlbiBleHRyYSBnb2QgbWlkZGFn',
'VGEgZW4gcHJvbWVuYWQgbWVkIGVuIHbkbg==',
'R/ZyIG7lZ29uIGdsYWQ=',
'RGV0IHZpIGludGUgZ/ZyIGlkYWcgLSBzbGlwcGVyIHZpIGf2cmEgb20gaW1vcmdvbg==',
'R29kIEp1bCE='
]
