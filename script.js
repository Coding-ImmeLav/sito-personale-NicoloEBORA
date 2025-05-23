const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

// Carica il tema salvato (se c'è)
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

// Cambia tema al click
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Salva la scelta
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});