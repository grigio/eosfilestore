import * as Base64 from 'base64-js'
import * as fs from "fs";
import mime from 'mime-types'
const Eos = require('eosjs')
import { splitString } from './utils'
import { maxPayloadSize, chainId, from, wif, permission } from './costants'

const config = {
  chainId: chainId,
  keyProvider: [wif],
  httpEndpoint: 'https://api.eosnewyork.io',
  // TODO: changeable https://api.eosnewyork.io https://nodes.get-scatter.com
  expireInSeconds: 60,
  broadcast: true,
  verbose: false, // API activity
  sign: true
}

const eos = Eos(config)

export function doTx(memo: string): Promise<any> {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      // eos.transfer(from, 'eosfilestore', '0.0001 EOS', memo, (error: any, result: any) => {
      //   if (error) {
      //     console.error(error)
      //   }
      //   // console.log('..',JSON.stringify(result))
      //   resolve(result)
      // })

      const options = {
        authorization: [`${from}@${permission}`]
      }
      eos.contract('decentwitter').then((contract: any) => {
        contract.avatar(memo, options).then((res:any) => {
          resolve(res)
        })
      });

    }, 100); // NOTE: rate limit?
  })
}

// just to test promises
// async function fakeTransferPromise(memo: string): Promise<any> {
//   return new Promise((resolve: any) => {
//     setTimeout(async () => {
//       await resolve({ transaction_id: Math.random().toString() })
//     }, 2000);
//   })
// }

export function fetchTx(txid: string, buffer?: string): Promise<string> {
  return new Promise((resolve: any) => {
    eos.getTransaction(txid).then((data: any) => {
      // console.log(JSON.stringify(data.trx.trx.actions[0].data.msg))
      // console.log(data.trx.trx.actions[0].data.memo) // data.trx.trx.actions[0].data.memo

      // const memo = JSON.parse(data.trx.trx.actions[0].data.memo)
      const memo = JSON.parse(data.trx.trx.actions[0].data.msg)

      console.log(`${memo.n}`) // verbose
      if (memo.n) {
        resolve(fetchTx(memo.n, `${buffer}${memo.c}`))
      } else {
        resolve(`${buffer}${memo.c}`)
      }
    })
  })
}

export function prepareChunks(filepath: string): Promise<string[]> {
  return new Promise((resolve: any, reject: any) => {
    fs.readFile(filepath, (err: any, data: Uint8Array) => {
      if (err) {
        console.error(err)
        reject([])
      }
      const blob = Base64.fromByteArray(data);
      const mimetype = mime.lookup(filepath)
      const dataString = `data:${mimetype};base64,${blob}`
      // console.log(dataString)
      const chunks = splitString(dataString, maxPayloadSize);

      resolve(chunks)
    });
  })
}