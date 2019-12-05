const boxes = document.getElementsByClassName("just-box")

boxes[0].addEventListener("mouseenter",() => {
    audio.play()
})

boxes[0].addEventListener("mouseout", () => {
    audio.pause()
})