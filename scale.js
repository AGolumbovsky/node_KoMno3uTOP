const scribble = require('scribbletune');

let scale = scribble.clip({
    notes: scribble.scale('c', 'major', '3'),
    pattern: 'x-'.repeat(8).repeat(3),
    sizzle: true
});

scribble.midi(scale, './clips/cscale.mid');