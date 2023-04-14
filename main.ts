radio.setGroup(1)
radio.setTransmitSerialNumber(true)
images.createImage(`
    . . . # #
    . . # . .
    . . . # .
    . . . . #
    . . # # .
    `).showImage(0)
basic.forever(function () {
    radio.sendValue("ID", 30)
    radio.sendValue("X", input.acceleration(Dimension.X))
    radio.sendValue("Y", input.acceleration(Dimension.Y))
    radio.sendValue("Z", input.acceleration(Dimension.Z))
    basic.pause(50)
    led.toggle(0, 0)
    basic.pause(50)
    led.toggle(0, 0)
})
