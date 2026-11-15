// "tdfw"
// script @by TapiocaFox
setcpm(25)

drum: s("hh@1.5 ~ hh@1.5 ~  hh@1.5 ~ hh@1.5 ~ hh hh ~ ~")
  .bank("yamahary30")
  .release(1)
  .legato("1!10 0.6 0.6 1 1")
  .n(0)
  .speed("1 1 1 1 1 1 1 1")
  .room(0.05)
  .velocity("1!10 1.1 1.1 1 1")
  .gain("0.65!10 0.8 0.8 1 1")

fast_drum: s("~@1.7 cb@0.8 ~@1.7 cb@0.8 ~@1.7 cb@0.8 ~@1.7 cb@0.8 ~@2 ~@0.4 [cb*2]@0.8!2")
  .bank("yamahary30")
  .legato("0.5!14 1 1")
  .speed("1.55")
  .n(0)
  .room(0.05)
  .gain(0.15)

kick: s("bd@1.5 ~ bd@1.5 ~  bd@1.5 ~ bd@1.5 ~  bd bd ~ ~")
  .bank("yamahary30")
  .legato(0.5)
  .gain(0.3)

riser_freq: s("white*32")
  .hpf(saw.range(300, 8000).slow(4))
  .gain(saw.range(0, 0.5).slow(4))
  .mask("<1!4 0!4>")
