import { splitString, createPayload } from './utils'

import { maxPayloadSize } from './costants'

test('splitString - basic use case', () => {
  expect(splitString('12345678901234567890', 10)).toEqual(['1234567890', '1234567890'])
  expect(splitString('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDx0aXRsZT5iYWNrZ3JvdW5kPC90aXRsZT4KICA8cmVjdCBmaWxsPSIjZmZmIiBpZD0iY2FudmFzX2JhY2', maxPayloadSize)).toEqual(['data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDx0aXRsZT5iYWNrZ3JvdW5kPC90aXRsZT4KICA8cmVjdCBmaWxsPS', 'IjZmZmIiBpZD0iY2FudmFzX2JhY2'])

})

test('createPayload - basic use case', () => {
  const chunk0 = '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456'
  const txid = '9d41e20d6819dbf8a6021f6cb6865c8aaef546d3399737da2315879d1f4b5f71'
  expect(createPayload(chunk0, txid)).toEqual(`{"c":"${chunk0}","n":"${txid}"}`)

  const chunk = '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456'
  expect(createPayload(chunk, null)).toEqual(`{"c":"${chunk}","n":null}`)
})