document.addEventListener("DOMContentLoaded", julenärhär);

const texter = [
    'God jul',
    'Lorekjasdlkjh kjsahdflkjhas fdlkjhsa df',
    'lklksljlasd'
]

function julenärhär() {
    let luckor = [...document.getElementsByClassName('jul')];

    luckor.forEach((el,i) => {
        let fram = el.querySelector('.fram');
        let bak = el.querySelector('.bak');
        let input = el.querySelector('input');
        fram.textContent = input.id;
        bak.textContent = texter[i % texter.length];
        el.onclick = (e) => {
            if (e.target.id > new Date().getDate()) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    });
}