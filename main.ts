input.onGesture(Gesture.ScreenDown, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1512, 255, 61, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1512, 255, 61, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1512, 255, 61, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1512, 255, 61, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # .
        . . . . .
        . . . . .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1512, 255, 61, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1512, 255, 61, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1512, 255, 61, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 3919, 255, 182, 900, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
buttonClicks.onButtonSingleClicked(buttonClicks.AorB.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    for (let index = 0; index < 2; index++) {
        basic.showArrow(ArrowNames.North)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(500)
        basic.showArrow(ArrowNames.NorthEast)
        pins.servoWritePin(AnalogPin.P2, 40)
        basic.pause(500)
        basic.showArrow(ArrowNames.East)
    }
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.pause(200)
    pins.servoWritePin(AnalogPin.P1, 1)
    basic.pause(200)
})
buttonClicks.onButtonSingleClicked(buttonClicks.AorB.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # . # #
        # . # . #
        # # . # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.OnceInBackground)
    turtle.setPosition(2, 2)
    turtle.forward(2)
    turtle.turnLeft()
    turtle.forward(2)
    turtle.turnLeft()
    turtle.forward(2)
    turtle.turnLeft()
    turtle.forward(2)
    turtle.turnLeft()
    turtle.forward(2)
    turtle.turnRight()
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
    basic.showString("Hello!")
    basic.showString("Anas")
    basic.showString("I am")
    basic.showString("Gidit")
})
music.onEvent(MusicEvent.MelodyEnded, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showLeds(`
        # . . . #
        . # . . .
        . . # . .
        # # # # #
        # # # # #
        `)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showLeds(`
        # . . . #
        . . . # .
        . . # . .
        # # # # #
        # # # # #
        `)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . . # . .
        # # # # #
        `)
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        # # # # #
        `)
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        `)
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        # # # # #
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.OnceInBackground)
    turtle.setPosition(2, 2)
    for (let index = 0; index < 4; index++) {
        turtle.forward(1)
        turtle.back(1)
        turtle.turnLeft()
        turtle.forward(1)
        turtle.back(1)
    }
})
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
pins.digitalWritePin(DigitalPin.P1, 1)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    # . # . #
    . . . . .
    # . . . #
    . . . . .
    # . # . #
    `)
basic.showLeds(`
    # . # . #
    . . . . .
    # . # . #
    . . . . .
    # . # . #
    `)
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
})
