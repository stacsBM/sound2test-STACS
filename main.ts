datalogger.onLogFull(function () {
    basic.showIcon(IconNames.Skull)
    logging = false
})
input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.No)
        datalogger.deleteLog()
        logging = false
        datalogger.setColumnTitles(
        "pitch",
        "roll"
        )
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        (100 + input.rotation(Rotation.Pitch)) * 2,
        (200 + input.rotation(Rotation.Roll)) * 4,
        255,
        0,
        250,
        SoundExpressionEffect.None,
        InterpolationCurve.Logarithmic
        ), music.PlaybackMode.UntilDone)
    }
})
let logging = false
logging = false
basic.showIcon(IconNames.Yes)
datalogger.setColumnTitles(
"pitch",
"roll"
)
basic.forever(function () {
	
})
loops.everyInterval(100, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("roll", input.rotation(Rotation.Roll)),
        datalogger.createCV("pitch", input.rotation(Rotation.Pitch))
        )
    }
})
