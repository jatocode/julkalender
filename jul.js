document.addEventListener("DOMContentLoaded", julenarhar);

function julenarhar() {
    let luckor = [...document.getElementsByClassName('lucka')];

    luckor.forEach(el => {
        el.onclick = (e) => { 
            e.target.classList.toggle('öppen');
        }
    });
}