// it splits the string in string chunks of a fixed size
export function splitString(str: string, size: number): string[] {
  const re = new RegExp('.{1,' + size + '}', 'g')
  const matches = str.match(re) || []
  return matches
}

// it create the memo to add to the tx
export function createPayload(chunk: string, nextTx: string | null): string {
  if (chunk === '') { throw new Error(`chunk can't be empty`) }
  const nextTxStr = (nextTx) ? `"${nextTx}"` : null
  return `{"c":"${chunk}","n":${nextTxStr}}`
}