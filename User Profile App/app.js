window.onload = () => {
    document.querySelector('#buttonSubmit').addEventListener('click', getData);
    registerSW();
}

function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        let out = '<h2 class = "mt-3 mb-2"></h2>'

        data.forEach(user => {
            out += 
            `
                <ul class = "list-group mb-3">
                    <li class = "list-group-item text-primary">${user.name}</li>
                    <li class = "list-group-item text-secondary">${user.email}</li>
                </ul>
            `
        });
        document.querySelector('#result').innerHTML = out;
        })
}
async function registerSW() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('./sw.js');
      } catch (e) {
        console.log(`SW registration failed`);
      }
    }
  }