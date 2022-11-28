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
    let luckordning = JSON.parse(localStorage.getItem('luckordning6luckor'));
    if (luckordning == undefined) {
        luckordning = [];
        while (luckordning.length < 5) {
            let dag = getRandomInt(5) + 2;
            if (!luckordning.includes(dag)) luckordning.push(dag);
        }
        localStorage.setItem('luckordning6luckor', JSON.stringify(luckordning));
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
            // let now = new Date();
            // if (now.getMonth() != 11 || e.target.id > now.getDate()) {
            //     e.preventDefault();
            //     e.stopPropagation();
            // } else if (e.target.id != '') {
                let bak = el.querySelector('.bak');
                bak.textContent = window.atob(ktexter[(e.target.id - 1) % ktexter.length]);
            //}
        }
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const ktexter = [
'RXJpa2EgLCBMYXJzIG9jaCBOaW5hIHN09nR0YXIgdXBwIGZyYW0gdGlsbCBib2tzbHV0LApoauRscGVyIHZlcmtzYW1oZXRlciBzb20gaGFyIGJ1ZGdldCBw5SBsdXQuClBsYW5lcmFyIG9jaCBhbmFseXNlcmFyIOV0IHZlcmtzYW1oZXRlciwKYnVkZ2V0IG9jaCBt5WwgYmxpciBhbGRyaWcgdHLla2lnaGV0ZXIuCkb2bGplciB1cHAgb2NoIGtvbnRyb2xsZXJhciBlcmEgc3RyYXRlZ2llciwKU+UgdGEgdGlsbGbkbGxldCBpIGFrdCBhdHQgbnl0dGphIGRlc3NhIGdlbmllci4=',
'U3lzdGVtZvZydmFsdGFyZW4gc3RpcnJhciBw5SBzaW4gc2vkcm0sIG1vcmdvbiB0aWxsIGt25GxsLiBO5HIganVsYWZ0b24ga29tbWVyLCBkcmFyIGhlbiBw5SBzaWcgZW4gZuRsbC4gU3lzdGVtZW4gbeVzdGUgZnVua2EgdGp1Z29meXJhLXNqdS4gRORyZvZyIG3lc3RlIG7lZ29uIGjlbGxhIGtvbGwg5HZlbiD2dmVyIGxlZGlnaGV0ZW4sIGp1Lg==',
'SXQtc2Ftb3JkbmFyZW4gZ/ZyIGFsbHQgbWVsbGFuIGhpbW1lbCBvY2ggam9yZApTZXIgdGlsbCBhdHQgdmkgaGFyIGVuIGZ1bmdlcmFuZGUgZGF0b3IgcOUgduVydCBib3JkCkFnZXJhciBzdXBwb3J0IG9jaCB1cHBkYXRlcmFyIGxpY2Vuc2VyLAp0aWxscyBoZWxhIGl0LW1pbGr2biBnbORuc2VyCkthbnNrZSDkdmVuIGVuIHVwcGRhdGVyaW5nIGF2IHByb2dyYW12YXJhLApVdGFuIGl0LXNhbW9yZG5hcmVuIGthbiB2aSBvc3MgaW50ZSBrbGFyYS4=',
'SVQtc3RyYXRlZ2VuIG1lanNsYXIgZnJhbSBkZW4gbOVuZ3Npa3RpZ2EgcGxhbmVuIApz5SBhbGxhIG1lZCBmcvZqZCBkYW5zYXIgcnVudCBqdWxncmFuZW4uCsVyZXQgYvZyamFyIG1lZCBnZW5vbXTkbmt0IHN0cmF0ZWdpClN0cmF0ZWdlbiByb3BhciAiaGVqYSIgbuRyIGFsbGEgam9iYmFyIGkgbWFuaS4KTG90c2FyIHNpZyBmcmFtIG1lZCBrbG9raGV0IG9jaCBtZXIg5G4gZW4gcHJvY2VzcwpIYW4gc2thcGFyIHVuZGVyIG1lZCBzaW4gbWFrYWz2c2EgZmluZXNzLg==',
'UHJvY2Vzc2VyIHByb2Nlc3NlciAtIGb2ciBlbiB2ZXJrc2FtaGV0c3V0dmVja2xhcmUg5HIgZGV0dGEgcmVuYSBkZWxpa2F0ZXNzZXIuCkF0dCBm9nJi5HR0cmEgb2NoIGb2cuRuZHJhIGf2ciBhdHQgYXZkZWxuaW5nYXIgc3TkbGxzIHDlIHNpbiDkbmRhLgpHZW5vbSBhdHQgb2Nrc+UgZWZmZWt0aXZpc2VyYSB0YXMgdmVya3NhbWhldGVuIGTkcmVmdGVyIG1lZCBpbiBpIGVuIG55IGVyYQ==',
'VGlsbCBsZWRuaW5nc2dydXBwZXIgaG9uIHTlbG1vZGlndCBn5XIgZGVuIHN0YWNrYXJzIGtyYWtlbgpQdW5rdGVuIHDlIGFnZW5kYW4gZuVyIGJvcmRldCBhdHQgc2x1bXJhCmVsbGVyIORyIGRldCBldHQgdGlsbGbkbGxlIGF0dCBrb2xsYSBzaW4gbWVqbCBrYW4gbWFuIHVuZHJhCk1lbiB25G50YSwgZGUgYWxsYSBydW50IGJvcmRldCBwbPZ0c2xpZ3QgZvZyc3TlcgpJbnNpa3Qgb2NoIG1vdGl2YXRpb24gZGUgZuVyClNlIGTkciwgbnUg5HIgaW50ZSBlbmRhc3QgbWlsavZzYW1vcmRuYXJlbiB2YWtlbi4='
]
