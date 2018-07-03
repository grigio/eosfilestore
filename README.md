# 📜 EOSfilestore

### immutable, censorship resistant, cheap, file storage on EOS blockchain

EOSfilestore uploads files on EOS blockchain as multiple transactions

## Installation

```
sudo npm install -g eosfilestore 
```

Then run `eosfilestore` and edit `~/eosfilestore/config.json` with your **account** (from) and **wif** (private key)

## Usage

```
eosfilestore cost myfile.txt       # an estimate how many EOS it will cost. You need enough cpu and net staking
eosfilestore push myfile.txt       # it will generate the txs and upload the file on EOS Blockchain
eosfilestore get <txid> myfile.txt # it will download the file from the EOS Blockchain
```

## License

EOSfilestore is [MIT licensed](./LICENSE).
