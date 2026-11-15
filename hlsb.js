// "hlsb"
// script @by TapiocaFox
setcpm(130/4)

drum: s("bd@1.55 bd@0.45 bd@1.1 bd@0.9 bd bd bd@1.2 ~@0.8")
  .bank("mc303")
  .n(2)
  .speed("1 1.6 1 1.3 1 1.3 1 1")
  .room(0.05)
  .dec("[.6 .2]*4")
  .gain("[1 .5]*4")
  .gain(0.65)

clap: s("~ ~ cp ~ ~ ~ cp ~")
  .gain(0.35)

const phrase1 = note("[b4 b4 ~ b4 c#5 c#5 ~ c#5]")
const phrase2 = note("[d5 d5 ~ d5 f#5 f#5 ~ f#5]")
const pseudo_melody = cat(phrase1, phrase2)

const melody = arrange([4, pseudo_melody], [2, pseudo_melody.transpose(5)], [2, pseudo_melody.transpose(7)])

pitches: melody
  .sound("wt_digital_curses")
  .legato(0.5)
  .room(0.25)
  .gain(0.35)

pitches2: melody
  .sound("sine")
  .legato(0.5)
  .lpf(1800)
  .room(.75)
  .delay(0.85)
  .delaysync(0.2)
  .gain(0.8)
