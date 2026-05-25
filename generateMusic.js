const fs = require("fs")
const path = require("path")

const musicFolder = "./music"
const files = fs.readdirSync(musicFolder)
    .filter(f => f.endsWith(".mp3"))

const output = `const songs = ${JSON.stringify(files, null, 4)}`

fs.writeFileSync("./songList.js", output)
console.log(`Found ${files.length} songs!`)