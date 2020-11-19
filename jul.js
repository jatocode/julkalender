/*
    Liten enkel julkalender.
    Tobias Jansson, 2020.

    https://github.com/jatocode/julkalender
*/

document.addEventListener("DOMContentLoaded", () => {
    skapaluckor();
    kalender();
});

const ktexter = [
    'AEIAYQBrAGEAIABuAOUAZwBvAHQAIABnAG8AdAB0AA==',
    'AEwA5ABzACAAZQBuACAAYgByAGEAIABiAG8AawA=',
    'AEcA5QAgAGUAbgAgAGwAdQBuAGMAaABwAHIAbwBtAGUAbgBhAGQA',
    'AEcA9gByACAAbgDlAGcAbwBuACAAZwBsAGEAZAA=',
    'AFMAZQAgAGUAbgAgAGIAcgBhACAAZgBpAGwAbQAvAHMAZQByAGkAZQA=',
    'AFQAYQAgAGQAZQB0ACAAbAB1AGcAbgB0AA==',
    'AEQAZQBsAGEAIABlAG4AIAByAG8AbABpAGcAIAB2AGkAZABlAG8A',
    'AFIAaQBuAGcAIABlAG4AIAB2AOQAbgA=',
    'AEsAbwBrAGEAIABrAG4A5ABjAGsALwBrAG8AbABhAC4AIABHAHIAYQB0AHQAaQBzACAAQQBuAG4AYQAuAA==',
    'AEYAaQByAGEAIABBAGwAZgByAGUAZAAgAE4AbwBiAGUAbAAgAG0AZQBkACAAYgB1AGIAYgBlAGwALgAgAEcAcgBhAHQAdABpAHMAIABNAGEAbABpAG4ALgA=',
    'AFQAYQAgAGUAdAB0ACAAcAByAG8AbQBlAG4AYQBkAG0A9gB0AGUA',
    'AEkAbgB2AGUAcwB0AGUAcgBhACAAaQAgAGQAaQBnACAAcwBqAOQAbAB2AA==',
    'AMQAdAAgAG0A5QBuAGcAYQAgAHAAZQBwAHAAYQByAGsAYQBrAG8AcgAgAG8AYwBoACAAZgBpAHIAYQAgAEwAdQBjAGkAYQA=',
    'AFMAcABlAGwAYQAgAG8AYwBoACAAZABlAGwAYQAgAGQAaQBuACAAZgBhAHYAbwByAGkAdABsAOUAdAA=',
    'AFMAcABlAGwAYQAgAGIAcgDkAGQAcwBwAGUAbAA=',
    'AEwAYQBnAGEAIABlAG4AIABlAHgAdAByAGEAIABnAG8AZAAgAG0AaQBkAGQAYQBnAA==',
    'AEsA9gByACAAZQB0AHQAIAB0AHIA5ABuAGkAbgBnAHMAcABhAHMAcwA=',
    'AFQAagB1AHYA5AB0ACAAawBvAGwAYQAvAGsAbgDkAGMAawA=',
    'AMQAdAAgAGQAYQBnAGUAbgBzACAAbAB1AG4AYwBoACAAaQAgAHMAawBvAGcAZQBuAA==',
    'AFIAaQB0AGEALwBtAOUAbABhACAAZQBuACAAdABlAGMAawBuAGkAbgBnAA==',
    'AFQAYQAgAGUAbgAgAHAAcgBvAG0AZQBuAGEAZAAgAG0AZQBkACAAZQBuACAAdgDkAG4A',
    'AFMAZQAgAGUAbgAgAEoAdQBsAGYAaQBsAG0A',
    'AFMAawDkAG4AawAgAGUAbgAgAGcA5QB2AGEAIAB0AGkAbABsACAAdgDkAGwAZwD2AHIAZQBuAGgAZQB0AA==',
    'AEcAbwBkACAASgB1AGwAIABrAOQAcgBhACAAawBvAGwAbABlAGcAbwByACE='
]

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
   let luckor = [...document.getElementsByClassName('lucka')];
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