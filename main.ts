input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendValue("DUCK", randint(0, 5))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendValue("GHOST", randint(0, 5))
})
radio.onReceivedValue(function (name, value) {
    basic.clearScreen()
    if (value == 0) {
        if (name == "DUCK") {
            basic.showIcon(IconNames.Duck)
        } else if (name == "GHOST") {
            basic.showIcon(IconNames.Ghost)
        }
    }
})
radio.setGroup(23)
