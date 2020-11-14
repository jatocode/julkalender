document.addEventListener("DOMContentLoaded", julenärhär);

function julenärhär() {
    let luckor = [...document.getElementsByClassName('clucka')];

    luckor.forEach(el => {
        el.onclick = (e) => {
            if (e.target.id > new Date().getDate()) {
                e.preventDefault();
                e.stopPropagation();
            }

        }
    });
}