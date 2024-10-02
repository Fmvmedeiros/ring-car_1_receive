radio.onReceivedValue(function (name, value) {
    if (name == "Frente") {
        RingbitCar.forward()
    } else if (name == "Tras") {
        RingbitCar.back()
    } else if (name == "esq") {
        RingbitCar.turnleft()
    } else if (name == "dir") {
        RingbitCar.turnright()
    } else if (name == "para") {
        RingbitCar.brake()
    } else {
        basic.showString("err")
    }
})
/**
 * Mudar o grupo de Rádio e p desenho.
 */
radio.setGroup(2)
basic.showLeds(`
    # # # # #
    . . . . #
    # # # # #
    # . . . .
    # # # # #
    `)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
