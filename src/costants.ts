import fs from 'fs'

function loadConfig() {
  const confDir = `${process.env.HOME}/.eosfilestore`

  // write default config.js in the first run
  if (!fs.existsSync(confDir)) {
    fs.mkdirSync(confDir)
    fs.writeFileSync(`${confDir}/config.json`, `
{
  "from":"",
  "privateKey":"",
  "permssion":"active"
}
    `)
    console.log(`eosfilestore: Generated '${confDir}/config.json', please edit with your EOS keys`)
  }

  // read config
  const configFile = fs.readFileSync(`${confDir}/config.json`).toLocaleString()

  return JSON.parse(configFile)

}

const confObj = loadConfig()

// console.log('cc', confObj)

export const maxPayloadSize = 10000 // 429496 // 176 // 4294967294
export const costPerTx = 0.0001
export const chainId = confObj.chainId || 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906' // mainnet
export const wif = confObj.privateKey
export const from = confObj.from
export const permission = confObj.permission || 'active'
