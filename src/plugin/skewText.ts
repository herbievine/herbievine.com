const nodes = document.querySelectorAll('h1') as unknown as HTMLElement[] | null
let currentPos = window.pageYOffset;

const skewText = () => {
    console.log(nodes, document)
    const newPos = window.pageYOffset
    const diff = newPos - currentPos
    const speed = diff * 0.35

    if (nodes?.length) {
        for (let i = 0; i < nodes?.length; i++) {
            nodes[i].style.transform = `skewY(${ speed }deg)`
        }
    }

    currentPos = newPos

    requestAnimationFrame(skewText)

    skewText()
}

export { skewText }