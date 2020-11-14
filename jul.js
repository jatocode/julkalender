document.addEventListener("DOMContentLoaded", julenärhär);

const texter = [
    'R29kIGp1bA',
    'AFQAbwBiAGkAYQBzACAA5AByACAAdABvAG0AdABlAG4A',
    'AEQAZQB0ACAAaADkAHIAIADkAHIAIABlAG4AIABqAOQAdAB0AGUAbADlAG4AZwAgAHQAZQB4AHQAIABzAG8AbQAgAGsAYQBuAHMAawBlACAAZgBsAHkAdABlAHIAIAD2AHYAZQByACAAawBhAG4AdABlAHIAbgBhACAAbQBlAG4AIABzAOUAIABmAOUAcgAgAGQAZQB0ACAAYgBsAGkAcgAgAGkAcwDlAGYAYQBsAGwA'
]

function julenärhär() {
    let luckor = [...document.getElementsByClassName('jul')];

    luckor.forEach((el,i) => {
        let fram = el.querySelector('.fram');
        let input = el.querySelector('input');
        fram.textContent = input.id;

        el.onclick = (e) => {
            if (e.target.id > new Date().getDate()) {
                e.preventDefault();
                e.stopPropagation();
            } else {
                let bak = el.querySelector('.bak');
                bak.textContent = window.atob(texter[i % texter.length]);
            }
        }
    });
}