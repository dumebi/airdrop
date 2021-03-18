// import { program } from 'commander'
import fs from 'fs'
import { parseBalanceMap } from '../src/parse-balance-map'

// program
//   .version('0.0.0')
//   .requiredOption(
//     '-i, --input <path>',
//     'input JSON file location containing a map of account addresses to string balances'
//   )

// program.parse(process.argv)

const json = JSON.parse(fs.readFileSync("./scripts/example.json", { encoding: 'utf8' }))

if (typeof json !== 'object') throw new Error('Invalid JSON')
fs.writeFileSync("./scripts/claims.json", JSON.stringify(parseBalanceMap(json)), { encoding: 'utf8' })
// console.log(JSON.stringify(parseBalanceMap(json)))
