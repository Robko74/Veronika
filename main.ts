input.onButtonPressed(Button.A, function () {
    music.setVolume(99)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
    led2.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    led2.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    led2.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    led2.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    led2.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    led2.show()
    basic.showString("Start!")
    basic.showIcon(IconNames.Happy)
    kitronik_servo_lite.setDistancePerSecond(10)
    kitronik_servo_lite.driveBackwards(10)
    kitronik_servo_lite.turnRight(180)
    kitronik_servo_lite.driveForwards(10)
    kitronik_servo_lite.turnLeft(180)
    basic.showIcon(IconNames.Surprised)
    basic.showString("Finish!")
    music.stopAllSounds()
    led2.clear()
    led2.show()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        kitronik_servo_lite.setDistancePerSecond(5)
        kitronik_servo_lite.driveBackwards(10)
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        music.playTone(311, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(200)
        led2.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        led2.show()
        basic.pause(2000)
        led2.clear()
        led2.show()
        kitronik_servo_lite.turnRight(90)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    led2.setPixelWhiteLED(0, 4)
    led2.show()
})
let led2: neopixel.Strip = null
led2 = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)