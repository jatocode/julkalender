document.addEventListener("DOMContentLoaded", julenärhär);

const ktexter = [
    'R29kIGp1bA',
    'AFQAbwBiAGkAYQBzACAA5AByACAAdABvAG0AdABlAG4A',
    'AEQAZQB0ACAAaADkAHIAIADkAHIAIABlAG4AIABqAOQAdAB0AGUAbADlAG4AZwAgAHQAZQB4AHQAIABzAG8AbQAgAGsAYQBuAHMAawBlACAAZgBsAHkAdABlAHIAIAD2AHYAZQByACAAawBhAG4AdABlAHIAbgBhACAAbQBlAG4AIABzAOUAIABmAOUAcgAgAGQAZQB0ACAAYgBsAGkAcgAgAGkAcwDlAGYAYQBsAGwA'
]

const texter = [
    'God Jul',
    'Snön faller och vi med den',
    'Tomten kysser mamma',
    'Nu tändas tusen juleljus'
]

function julenärhär() {
    let luckor = [...document.getElementsByClassName('jul')];

    luckor.forEach((el,i) => {
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
                bak.textContent = texter[i % texter.length];
            }
        }
    });
}