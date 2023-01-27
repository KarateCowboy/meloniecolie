const fs = require('fs/promises')
const lineToQuote = require('../build/src/quotes').lineToQuote
const main = async (filePath) => {
  try {
    const json = await fs.readFile(filePath, 'utf8')
    const asObjects = json.split('\n').filter((l) => { return !!l}).map((l) => { return lineToQuote(l)})
    asObjects.forEach((o) => {
      console.dir(o, { depth: null})
    })
  } catch (e) {
    console.log(e.message)
  }
}
main(process.argv[2])
