// import { program } from 'commander'
const fs = require('fs')
const { parseBalanceMap } = require('../src/parse-balance-map')

const json = JSON.parse(fs.readFileSync("./scripts/example.json", { encoding: 'utf8' }))

if (typeof json !== 'object') throw new Error('Invalid JSON')
fs.writeFileSync("./scripts/claims.json", JSON.stringify(parseBalanceMap(json)), { encoding: 'utf8' })
