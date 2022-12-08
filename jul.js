/*
    Liten enkel julkalender.
    Tobias Jansson, 2020.

    https://github.com/jatocode/julkalender
*/

const antalLuckor = 6

document.addEventListener("DOMContentLoaded", () => {
    skapaluckor()
    kalender()
});

function slumpaluckor() {
    let luckordning = JSON.parse(localStorage.getItem('luckordning6luckor'));
    if (luckordning == undefined) {
        luckordning = []
        while (luckordning.length < (antalLuckor-1)) {
            let dag = getRandomInt(antalLuckor-1) + 2
            if (!luckordning.includes(dag)) luckordning.push(dag)
        }
        localStorage.setItem('luckordning6luckor', JSON.stringify(luckordning))
    }
    return luckordning
}

function skapaluckor() {
    let kal = document.getElementById('kalender')
    let lucka1 = document.getElementsByClassName('jul')[0]
    slumpaluckor().forEach(x => {
        const l = lucka1.cloneNode(true)
        let fram = l.querySelector('.fram');
        fram.textContent = x
        fram.id = x
        kal.append(l)
    })
}

function kalender() {
    let luckor = [...document.getElementsByClassName('jul')]
    luckor.forEach(el => {
        el.onclick = (e) => {
            let lucka = e.target.parentElement
            lucka.style.zIndex = lucka.style.zIndex == 100 ? 0 : 100
            // let now = new Date();
            // if (now.getMonth() != 11 || e.target.id > now.getDate()) {
            //     e.preventDefault();
            //     e.stopPropagation();
            // } else if (e.target.id != '') {
                let bak = el.querySelector('.bak')
                bak.textContent = window.atob(ktexter[(e.target.id - 1) % ktexter.length])
            //}
        }
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

const ktexter = [
    // Controllers
    'RXJpa2EgLCBMYXJzIG9jaCBOaW5hIHN09nR0YXIgdXBwIGZyYW0gdGlsbCBib2tzbHV0LApoauRscGVyIHZlcmtzYW1oZXRlciBzb20gaGFyIGJ1ZGdldCBw5SBsdXQuClBsYW5lcmFyIG9jaCBhbmFseXNlcmFyIOV0IHZlcmtzYW1oZXRlciwKYnVkZ2V0IG9jaCBt5WwgYmxpciBhbGRyaWcgdHLla2lnaGV0ZXIuCkb2bGplciB1cHAgb2NoIGtvbnRyb2xsZXJhciBlcmEgc3RyYXRlZ2llciwKU+UgdGEgdGlsbGbkbGxldCBpIGFrdCBhdHQgbnl0dGphIGRlc3NhIGdlbmllci4=',
    // Systemförvaltare
    'U3lzdGVtZvZydmFsdGFyZW4gc3RpcnJhciBw5SBzaW4gc2vkcm0sIG1vcmdvbiB0aWxsIGt25GxsLiAKTuRyIGp1bGFmdG9uIGtvbW1lciwgZHJhciBoZW4gcOUgc2lnIGVuIGbkbGwuClN5c3RlbWVuIG3lc3RlIGZ1bmthIHRqdWdvZnlyYS1zanUuCkTkcmb2ciBt5XN0ZSBu5WdvbiBo5WxsYSBrb2xsIOR2ZW4g9nZlciBsZWRpZ2hldGVuLCBqdS4=',
    // Verksamhetsutvecklare
    'UHJvY2Vzc2VyIHByb2Nlc3NlciwKZvZyIGVuIHZlcmtzYW1oZXRzdXR2ZWNrbGFyZSDkciBkZXR0YSByZW5hIGRlbGlrYXRlc3Nlci4KQXR0IGb2cmLkdHRyYSBvY2ggZvZy5G5kcmEsCmf2ciBhdHQgYXZkZWxuaW5nYXIgc3TkbGxzIHDlIHNpbiDkbmRhLgpHZW5vbSBhdHQgb2Nrc+UgZWZmZWt0aXZpc2VyYSwKdGFzIHZlcmtzYW1oZXRlbiBk5HJlZnRlciBtZWQgaW4gaSBlbiBueSBlcmEu',
    // IT-samordnare
    'SVQtc2Ftb3JkbmFyZW4gZ/ZyIGFsbHQgbWVsbGFuIGhpbW1lbCBvY2ggam9yZCwKc2VyIHRpbGwgYXR0IHZpIGhhciBlbiBmdW5nZXJhbmRlIGRhdG9yIHDlIHblcnQgYm9yZC4KQWdlcmFyIHN1cHBvcnQgb2NoIHVwcGRhdGVyYXIgbGljZW5zZXIsCnRpbGxzIGhlbGEgSVQtbWlsavZuIGds5G5zZXIuCkthbnNrZSDkdmVuIGVuIHVwcGRhdGVyaW5nIGF2IHByb2dyYW12YXJhLAp1dGFuIElULXNhbW9yZG5hcmVuIGthbiB2aSBvc3MgaW50ZSBrbGFyYS4=',
    // IT-strateg
    'SVQtc3RyYXRlZ2VuIG1lanNsYXIgZnJhbSBkZW4gbOVuZ3Npa3RpZ2EgcGxhbmVuLApz5SBhbGxhIG1lZCBmcvZqZCBkYW5zYXIgcnVudCBqdWxncmFuZW4uCsVyZXQgYvZyamFyIG1lZCBnZW5vbXTkbmt0IHN0cmF0ZWdpLApzdHJhdGVnZW4gcm9wYXIgImhlamEiIG7kciBhbGxhIGpvYmJhciBpIG1hbmkuCkxvdHNhciBzaWcgZnJhbSBtZWQga2xva2hldCBvY2ggbWVyIORuIGVuIHByb2Nlc3MsCmhhbiBza2FwYXIgdW5kZXIgbWVkIHNpbiBtYWthbPZzYSBmaW5lc3Mu',
   // Miljösamordnare
    'VGlsbCBsZWRuaW5nc2dydXBwZXIgaG9uIHTlbG1vZGlndCBn5XIgZGVuIHN0YWNrYXJzIGtyYWtlbi4KUHVua3RlbiBw5SBhZ2VuZGFuIGblciBib3JkZXQgYXR0IHNsdW1yYSwKZWxsZXIg5HIgZGV0IGV0dCB0aWxsZuRsbGUgYXR0IGtvbGxhIHNpbiBtZWpsIGthbiBtYW4gdW5kcmEuCk1lbiB25G50YSwgZGUgYWxsYSBydW50IGJvcmRldCBwbPZ0c2xpZ3QgZvZyc3TlciwKaW5zaWt0IG9jaCBtb3RpdmF0aW9uIGRlIGblci4KU2UgZORyLCBudSDkciBpbnRlIGVuZGFzdCBtaWxq9nNhbW9yZG5hcmVuIHZha2VuLg==',
]
