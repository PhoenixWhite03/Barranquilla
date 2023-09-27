var currentPlace= 0;
var places = 0;

function LoadImages() {
    places = document.getElementById('tourism-album').children.length - 2;

    UpdateImages()
}

function UpdateImages() {
    for (let i = 0; i < places; i++) {
        let imgDisplay = i !== currentPlace ? 'none' : 'block';
        let textDisplay = i !== currentPlace ? 'none' : 'block';

        document.getElementById(`img${i}`).style.display = imgDisplay;
        document.getElementById(`tourism-place${i}`).style.display = textDisplay;
    }
}

function Pass(direction=1) {
    currentPlace += direction;

    if (currentPlace >= places) {
        currentPlace = 0
    } else if (currentPlace < 0) {
        currentPlace = places - 1
    }

    UpdateImages()
}

function CloseMenu(ev) {
    let checkbox = document.getElementById('menu-checkbox')

    if (checkbox.checked.valueOf()) {
        checkbox.click();
    }
}

window.onload = LoadImages;

window.onclick = CloseMenu;