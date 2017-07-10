const scribble = require('scribbletune');

// this will crate a single c4 note 
let clip = scribble.clip({
    notes: ['c4']
});

// create a midi file in the same directory
scribble.midi(clip);