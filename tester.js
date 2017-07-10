const scribble = require('scribbletune');

let patterns = {
    onOff:          'x-x-x-x-x-x-x-x-',
    twoOn2Off:      'xx--xx--xx--xx--',
    threeOn3Off:    'xxx---xxx---xxx-',
    sixOn2Off:      'xxxxxx--xxxxxx--',
    customX:        'xxxxxxx--xxxxxx-'
}

let repeatsNum = 8;
// this will crate a note(s) and the pattern 
let dumbPiano = scribble.clip({
    notes: ['c4', 'a2'],
    pattern: patterns.customX.repeat(repeatsNum)
});

let bass = scribble.clip({
    notes: ['f#2'],
    pattern: 'xx---xx---xx'.repeat(repeatsNum)
});

// create a midi file in the same directory
scribble.midi(dumbPiano, './clips/tester.mid');
// scribble.midi(bass, './clips/tester.mid');

console.log("the file is created or updated");