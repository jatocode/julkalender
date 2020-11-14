document.addEventListener("DOMContentLoaded", () => {
    slumpaluckor();
    skapaluckor();
    kalender();
});

const ktexter = [
    'R29kIGp1bA',
    'AFQAbwBiAGkAYQBzACAA5AByACAAdABvAG0AdABlAG4A',
    'AEQAZQB0ACAAaADkAHIAIADkAHIAIABlAG4AIABqAOQAdAB0AGUAbADlAG4AZwAgAHQAZQB4AHQAIABzAG8AbQAgAGsAYQBuAHMAawBlACAAZgBsAHkAdABlAHIAIAD2AHYAZQByACAAawBhAG4AdABlAHIAbgBhACAAbQBlAG4AIABzAOUAIABmAOUAcgAgAGQAZQB0ACAAYgBsAGkAcgAgAGkAcwDlAGYAYQBsAGwA'
]

const texter = [
    '',
    '1 God Jul',
    '2 Snön faller och vi med den',
    '3 Tomten kysser mamma',
    '4 Nu tändas tusen juleljus',
    '5 Nu tändas tusen juleljus',
    '6 Nu tändas tusen juleljus',
    '7 Nu tändas tusen juleljus',
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
        let cb = l.querySelector('input');
        cb.id = x;
        kal.append(l);
    });
}

function kalender() {
    let luckor = [...document.getElementsByClassName('jul')];

    luckor.forEach(el => {
        let fram = el.querySelector('.fram');
        let input = el.querySelector('input');
        fram.textContent = input.id;
        el.onclick = (e) => {
            let lucka = e.target.parentElement;
            lucka.style.zIndex = lucka.style.zIndex == 100 ? 0 : 100;
            if (e.target.id > new Date().getDate()) {
                e.preventDefault();
                e.stopPropagation();
            } else {
                let bak = el.querySelector('.bak');
                // bak.textContent = window.atob(ktexter[i % ktexter.length]);
                bak.textContent = texter[input.id % (texter.length - 1)];
            }
        }
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}