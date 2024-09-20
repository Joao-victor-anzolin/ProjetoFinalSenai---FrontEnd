function loadFile(event) {
    var iconPlaceholder = document.getElementById('iconPlaceholder');
    var image = document.createElement('img');
    image.src = URL.createObjectURL(event.target.files[0]);
    iconPlaceholder.innerHTML = '';
    iconPlaceholder.appendChild(image);
}

let count = 0;
        
        function increment() {
            count++;
            document.getElementById('counter').innerText = count;
        }

        function decrement() {
            if (count > 0) {
                count--;
            }
            document.getElementById('counter').innerText = count;
        }