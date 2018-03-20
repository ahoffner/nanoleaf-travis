'use strict'
const symbols = require('./symbols')

const API = require('nanoleaves')

const aurora = new API()

const POLL_INTERVAL = 5000

const effect = new API.Animation({
  animName: 'test',
  animType: 'static',
  loop: false,
})

const officelist = [
  {id: 207, r: 0, g: 0, b: 0, transition: 50},
  {id: 218, r: 0, g: 0, b: 0, transition: 50},
  {id: 237, r: 0, g: 0, b: 0, transition: 50},
  {id: 192, r: 0, g: 0, b: 0, transition: 50},
  {id: 243, r: 0, g: 0, b: 0, transition: 50},
  {id: 196, r: 0, g: 0, b: 0, transition: 50},
  {id: 147, r: 0, g: 0, b: 0, transition: 50},
  {id: 63, r: 0, g: 0, b: 0, transition: 50},
  {id: 186, r: 0, g: 0, b: 0, transition: 50},
  {id: 38, r: 0, g: 0, b: 0, transition: 50},
  {id: 180, r: 0, g: 0, b: 0, transition: 50},
  {id: 173, r: 0, g: 0, b: 0, transition: 50},
  {id: 347, r: 0, g: 0, b: 0, transition: 50},
]

module.exports = function (repos, effects) {

  const stateEffects = {}
  if (effects !== null) {
    stateEffects[symbols.GREEN] = effects[0]
    stateEffects[symbols.CREATED] = effects[1]
    stateEffects[symbols.BUILDING] = effects[2]
    stateEffects[symbols.FAILED] = effects[3]
    stateEffects[symbols.ERRORED] = effects[4]
    stateEffects[symbols.UNKNOWN] = effects[5]
  }

  let animationCounter = 0

  setInterval(() => {
    console.log('intervaling')
    let updateSets = repos.map((repo) => {
      let state = repo.getState(animationCounter++)

      return state
    })

    updateSets.forEach((set) => {
      if (effects !== null) {
        console.log(stateEffects[set.state])
        aurora.setEffect(stateEffects[set.state])
        return
      }

      aurora.setStaticPanel(set.colors)
    })
  }, POLL_INTERVAL)
}
