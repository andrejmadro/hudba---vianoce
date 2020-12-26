input.onButtonPressed(Button.A, function () {
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(659, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(659, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(784, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(587, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(659, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(698, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(698, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(698, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(698, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(698, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(659, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(587, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(587, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(587, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(784, music.beat(BeatFraction.Whole))
})
basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
