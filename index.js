const counterEl = document.querySelector('.counter');
const barEl = document.querySelector('.loading-bar-front');

let idx = 0;

function updatenum() {
    counterEl.innerHTML = idx + "%";
    barEl.style.width = idx + "%";

    idx++;

    if (idx <= 100) {
        setTimeout(updatenum, 100);
    } else {
        // After reaching 100%, reset display back to 0%
        setTimeout(() => {
            counterEl.innerHTML = "0%";
            barEl.style.width = "0%";
        }, 500); // short delay before resetting display
    }
}

updatenum();
