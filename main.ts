
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `, 100)
list.push(receivedNumber)
        basic.clearScreen()
    } else if (receivedNumber == 1) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `, 100)
list.push(receivedNumber)
        basic.clearScreen()
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        parseMorse(morse_list)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
})


function parseMorse (list: any[]) {
    let morse_dict = {
        "A": [0, 1],
        "B": [1, 0, 0, 0],
        "C": [1,0,1,0],
        "D": [1,0,0],
        "E": [0],
        "F": [0,0,1,0],
        "G": [1,1,0],
        "H": [0,0,0,0],
        "I": [0,0],
        "J": [0,1,1,1],
        "K": [1,0,1],
        "L": [0,1,0,0],
        "M": [1,1],
        "N": [1,0],
        "O": [1,1,1],
        "P": [0,1,1,0],
        "Q": [1,1,0,1],
        "R": [0,1,0],
        "S": [0,0,0],
        "T": [1],
        "U": [0,0,1],
        "V": [0,0,0,1],
        "W": [0,1,1],
        "X": [1,0,0,1],
        "Y": [1,0,1,1],
        "Z": [1,1,0,0]
    }
    
    
    morse_list = []
}
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
})
let morse_list: number[] = []
let list: number[] = []
radio.setGroup(128)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
list = []
basic.forever(function () {
	
})

