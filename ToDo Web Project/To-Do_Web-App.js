const input = document.querySelector('input');
const btn = document.querySelector('.class1 > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e) => {
    (e.KeyboardEvent.keyCode === 13 ? addList(e) : null);
})

function addList(e) {
    const completedTask = document.querySelector('.completedTask');
    const pendingTask = document.querySelector('.pendingTask');

    const a = document.createElement('li');
    const b = document.createElement('button');
    const c = document.createElement('button');

    b.innerHTML = 'Complete';
    c.innerHTML = 'Delete';

    if (input.value !== '') {
        a.textContent = input.value;
        input.value = '';
        pendingTask.appendChild(a);
        a.appendChild(c);
        a.appendChild(b);
    }
    b.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
        completedTask.appendChild(parent);
        b.style.display = 'none';
    });
    c.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
    });

}