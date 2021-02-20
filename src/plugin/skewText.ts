const nodes = document.querySelector('h1') as HTMLElement
let currentPos = window.pageYOffset;

const skewText = () => {
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.35;

    if (nodes) {
        nodes.style.transform = `skewY(${ speed }deg)`;
    }

    currentPos = newPos;

    requestAnimationFrame(skewText);

    skewText()
}

export { skewText }