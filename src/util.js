let agents = require('caniuse-db/data.json').agents

module.exports = {
  formatBrowserName: function (browserKey, versions) {
    let browserName = (agents[browserKey] || {}).browser
    if (!versions) { return browserName }
    return (browserName + ' (' + versions.join(',') + ')')
  }
}
