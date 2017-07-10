const scribble = require('scribbletune');

let patterns = [
    'x-x-x-x-x-x-x-x-',
    'xx--xx--xx--xx--',
    'xxx---xxx---xxx-'
]

// this will crate a note(s) and the pattern 
let dumbPiano = scribble.clip({
    notes: ['c4', 'c3', 'a2'],
    pattern: patterns[1].repeat(8)
});

let bass = scribble.clip({
    notes: ['f#2'],
    pattern: 'xx---xx---xx'.repeat(10)
});

// create a midi file in the same directory
scribble.midi(dumbPiano, './clips/tester.mid');
// scribble.midi(bass, './clips/tester.mid');

console.log("the file is created/updated");