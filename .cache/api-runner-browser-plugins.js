module.exports = [{
      plugin: require('../node_modules/gatsby-omni-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"enableListener":true,"preconnect":["https://fonts.googleapis.com","https://fonts.gstatic.com"],"web":[{"name":"Open Sans","file":"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"}]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
