const somehowMaps = require('./src')

let w = somehowMaps({
  height: 300,
  aspect: 'widescreen'
})

// w.background({
//   shape: 'great-lakes'
// }).fill('lightblue')

// w.shape({
//   shape: 'provinces'
// })
//.color('lightgrey')

// w.background('states')
w.background('world')
// w.background('rivers')

w.line()
  .from('toronto')
  .to('winnipeg')
  .color('red')

w.dot()
  .at('barrie')
  .color('blue')

w.text('Toronto')
  .at('toronto')
  .color('red')

w.clip(true)
// w.graticule()
// w.globe()

w.center([-72.3961, 43.6601])
// w.fit()

document.querySelector('#stage').innerHTML = w.build()
