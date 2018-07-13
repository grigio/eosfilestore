# 📜 EOSfilestore

![schermata da 2018-07-07 12-14-08](https://user-images.githubusercontent.com/8074/42409753-516e04c8-81df-11e8-9d60-823fe4909d75.png)

### Immutable, censorship resistant, cheap, time proof, file storage on EOS blockchain

EOSfilestore uploads files on EOS blockchain as multiple transactions (actions), it doesn't cost EOS but you need enough staking in CPU and NET.

![npm version](https://img.shields.io/npm/v/eosfilestore.svg)


## Installation

```
sudo npm install -g eosfilestore 
```

Then run `eosfilestore` and edit `~/.eosfilestore/config.json` with your **account** (from) and **wif** (private key)

## Usage

```
eosfilestore cost myfile.txt       # an estimate how many EOS it will cost. You need enough cpu and net staking
eosfilestore push myfile.txt       # it will generate the txs and upload the file on EOS Blockchain
eosfilestore get <txid> myfile.txt # it will download the file from the EOS Blockchain
```

## How does it work?

1. The file is base64 encoded
2. N `actions` partial transactions are generated and broadcasted to the EOS Blockchain
3. Every tx link to the next one
4. Currently is used the `eosfilestore/upload` action

## Donate

If you like this software you can **donate EOS** to `@eosfilestore` account.

Thanks to [`EOS Nation Community Fund`](https://eosnation.io/community-engagement-fund/) for the smart contract deployment donation.

## License

EOSfilestore is [MIT licensed](./LICENSE).
