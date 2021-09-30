function handleKeyPress(event) {
  // You can put code here to handle the keypress.
  document.getElementById('last-keypress').innerText = event.key;
  // Log to the mainWindow console
  console.log(`You pressed ${event.key}`);
}

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle();
  document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light';
});

document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.darkMode.system();
  document.getElementById('theme-source').innerHTML = 'System';
});

window.addEventListener('keyup', handleKeyPress, true);