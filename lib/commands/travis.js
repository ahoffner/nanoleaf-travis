const startRepoUpdater = require('../repo-updater')
const startLightLoop = require('../light-loop')
const Repo = require('../repo')

exports.command = 'travis'

exports.describe = 'check travis for build status, update lights accordingly'

exports.handler = (argv) => {
  const repos = process.env.MONITORED_REPOS.split(',').map((monitored) => {
    const monitoredSplit = monitored.split(':')
    return new Repo(monitoredSplit[0], String(monitoredSplit[1]), Boolean(monitoredSplit[2]))
  })
  const effects =  process.env.EFFECTS.split(',')
  startRepoUpdater(repos)
  startLightLoop(repos, effects )
}
