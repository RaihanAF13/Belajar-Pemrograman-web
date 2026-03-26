const form = document.getElementById('myform');
const input = document.getElementById('nama');
const list = document.getElementById('tugasList');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const value = input.value.trim();
    if (!value) {
        alert('Tulis tugas terlebih dahulu.');
        return;
    }

    const item = document.createElement('li');
    item.textContent = value;
    list.appendChild(item);

    input.value = '';
    input.focus();
});