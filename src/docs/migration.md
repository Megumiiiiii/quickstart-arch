---
title: Migration
---

### Hapus Images sebelumnya

```bash
cd quickstart-archaeologist
COMPOSE_PROFILES=service docker compose down --remove-orphans
docker rmi jwilder/nginx-proxy nginxproxy/acme-companion ghcr.io/sarcophagus-org/sarcophagus-v2-archaeologist-service
```

### Pull Repo

```bash
git pull origin main
COMPOSE_PROFILES=service docker compose pull
```

### Set .env

- Remove old `.env` file

```bash
rm .env
```

- Copy sample

```bash
cp .env.example .env
```

- Lalu isi

```bash
nano .env
```

1. Gunakan wss:// bukan https:// untuk `PROVIDER_URL`
2. Butuh `ENCRYPTION_MNEMONIC` yang berbeda untuk setiap chain, generate [Here](https://iancoleman.io/bip39/) atau dimanapun
3. `ETH_PRIVATE_KEY` Private key yang berisi ETH/Matic dan $SARCO
4. `NOTIFICATION_WEBHOOK_URL` adalah discord webhook URL. Bisa baca disini untuk cara mengaturnya [discord webhook url](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) (Optional)


- Contoh isi `.env`

<CodeGroup>
<code-block title="All Chain">

```bash
## Key used to encrypt secrets and sign ETH transactions
## The address associated with this key is your archaeologist identifier
ETH_PRIVATE_KEY=ugfhttawfihqwoid132b1231b23

## (optional) multiply gas price estimation by this amount (i.e. 2 means 2x RPC gas price estimate)
#GAS_MULTIPLIER=
NOTIFICATION_WEBHOOK_URL=https://discord.com/api/webhooks/hafkakakjajbasbkadsbaksdjbakfbakfaf

## Domain to use for your archaeologist
## This domain should be pointed with an A record to your server's IP
DOMAIN=my.exampledomain.com

## Comma-separated list of chain ids of each network you want to run your service on.
## Supported Chain IDS:
## 1 = Mainnet
## 5 = Goerli
## 11155111 = Sepolia
## 84531 = Base Goerli
## 80001 = Polygon Mumbai
## example, to run on mainnet, goerli, and sepolia, set:
## CHAIN_IDS="1,5,11155111"
CHAIN_IDS=1,42161,137

## Here, you should define:
## - RPC provider urls.
## - Mnemonics used to derive keypairs to encrypt sarcophagi.
##   Generate a new one here - https://iancoleman.io/bip39/ or see README to generate one offline.
## Uncomment and set, for each network chain id you want to run on, your own
## private provider URL (infura, alchemy, etc) and a unique mnemonic for that network.
## ================================================================================================
MAINNET_PROVIDER_URL=wss://eth-mainnet
MAINNET_ENCRYPTION_MNEMONIC=never gonna give you up never gonna let you down

ARBITRUM_PROVIDER_URL==wss://arb-mainnet
ARBITRUM_ENCRYPTION_MNEMONIC=never gonna tell a lie and hurt you

POLYGON_MAINNET_PROVIDER_URL=wss://polygon-mainnet
POLYGON_MAINNET_ENCRYPTION_MNEMONIC=never gonna tell a lie and hurt you
```

</code-block>
<code-block title="Ethereum Only">

```bash
## Key used to encrypt secrets and sign ETH transactions
## The address associated with this key is your archaeologist identifier
ETH_PRIVATE_KEY=ugfhttawfihqwoid132b1231b23

## (optional) multiply gas price estimation by this amount (i.e. 2 means 2x RPC gas price estimate)
#GAS_MULTIPLIER=
NOTIFICATION_WEBHOOK_URL=https://discord.com/api/webhooks/hafkakakjajbasbkadsbaksdjbakfbakfaf

## Domain to use for your archaeologist
## This domain should be pointed with an A record to your server's IP
DOMAIN=my.exampledomain.com

## Comma-separated list of chain ids of each network you want to run your service on.
## Supported Chain IDS:
## 1 = Mainnet
## 5 = Goerli
## 11155111 = Sepolia
## 84531 = Base Goerli
## 80001 = Polygon Mumbai
## example, to run on mainnet, goerli, and sepolia, set:
## CHAIN_IDS="1,5,11155111"
CHAIN_IDS=1

## Here, you should define:
## - RPC provider urls.
## - Mnemonics used to derive keypairs to encrypt sarcophagi.
##   Generate a new one here - https://iancoleman.io/bip39/ or see README to generate one offline.
## Uncomment and set, for each network chain id you want to run on, your own
## private provider URL (infura, alchemy, etc) and a unique mnemonic for that network.
## ================================================================================================
MAINNET_PROVIDER_URL=wss://eth-mainnet
MAINNET_ENCRYPTION_MNEMONIC=never gonna give you up never gonna let you down

# GOERLI_PROVIDER_URL=
# GOERLI_ENCRYPTION_MNEMONIC=

##POLYGON_MAINNET_PROVIDER_URL=
##POLYGON_MAINNET_ENCRYPTION_MNEMONIC=
```

</code-block>
<code-block title="Polygon Only">

```bash
## Key used to encrypt secrets and sign ETH transactions
## The address associated with this key is your archaeologist identifier
ETH_PRIVATE_KEY=ugfhttawfihqwoid132b1231b23

## (optional) multiply gas price estimation by this amount (i.e. 2 means 2x RPC gas price estimate)
#GAS_MULTIPLIER=
NOTIFICATION_WEBHOOK_URL=https://discord.com/api/webhooks/hafkakakjajbasbkadsbaksdjbakfbakfaf

## Domain to use for your archaeologist
## This domain should be pointed with an A record to your server's IP
DOMAIN=my.exampledomain.com

## Comma-separated list of chain ids of each network you want to run your service on.
## Supported Chain IDS:
## 1 = Mainnet
## 5 = Goerli
## 11155111 = Sepolia
## 84531 = Base Goerli
## 80001 = Polygon Mumbai
## example, to run on mainnet, goerli, and sepolia, set:
## CHAIN_IDS="1,5,11155111"
CHAIN_IDS=137

## Here, you should define:
## - RPC provider urls.
## - Mnemonics used to derive keypairs to encrypt sarcophagi.
##   Generate a new one here - https://iancoleman.io/bip39/ or see README to generate one offline.
## Uncomment and set, for each network chain id you want to run on, your own
## private provider URL (infura, alchemy, etc) and a unique mnemonic for that network.
## ================================================================================================
##MAINNET_PROVIDER_URL=
##MAINNET_ENCRYPTION_MNEMONIC=

# GOERLI_PROVIDER_URL=
# GOERLI_ENCRYPTION_MNEMONIC=

POLYGON_MAINNET_PROVIDER_URL=wss://polygon-mainnet
POLYGON_MAINNET_ENCRYPTION_MNEMONIC=never gonna tell a lie and hurt you
```

</code-block>
<code-block title="Arbitrum Only">

```bash
## Key used to encrypt secrets and sign ETH transactions
## The address associated with this key is your archaeologist identifier
ETH_PRIVATE_KEY=ugfhttawfihqwoid132b1231b23

## (optional) multiply gas price estimation by this amount (i.e. 2 means 2x RPC gas price estimate)
#GAS_MULTIPLIER=
NOTIFICATION_WEBHOOK_URL=https://discord.com/api/webhooks/hafkakakjajbasbkadsbaksdjbakfbakfaf

## Domain to use for your archaeologist
## This domain should be pointed with an A record to your server's IP
DOMAIN=my.exampledomain.com

## Comma-separated list of chain ids of each network you want to run your service on.
## Supported Chain IDS:
## 1 = Mainnet
## 5 = Goerli
## 11155111 = Sepolia
## 84531 = Base Goerli
## 80001 = Polygon Mumbai
## example, to run on mainnet, goerli, and sepolia, set:
## CHAIN_IDS="1,5,11155111"
CHAIN_IDS=42161

## Here, you should define:
## - RPC provider urls.
## - Mnemonics used to derive keypairs to encrypt sarcophagi.
##   Generate a new one here - https://iancoleman.io/bip39/ or see README to generate one offline.
## Uncomment and set, for each network chain id you want to run on, your own
## private provider URL (infura, alchemy, etc) and a unique mnemonic for that network.
## ================================================================================================
##MAINNET_PROVIDER_URL=
##MAINNET_ENCRYPTION_MNEMONIC=

# GOERLI_PROVIDER_URL=
# GOERLI_ENCRYPTION_MNEMONIC=

ARBITRUM_PROVIDER_URL==wss://arb-mainnet
ARBITRUM_ENCRYPTION_MNEMONIC=never gonna tell a lie and hurt you
```

</code-block>
</CodeGroup>

### Register

If you want to run on multiple chain, you need to registering 1 by 1.


<CodeGroup>
<code-block title="Ethereum">


```bash
COMPOSE_PROFILES=register NETWORK=mainnet docker compose run register
```

</code-block>
<code-block title="Polygon">

```bash
COMPOSE_PROFILES=register NETWORK=polygonMainnet docker compose run register
```

</code-block>
<code-block title="Arbitrum">

```bash
COMPOSE_PROFILES=register NETWORK=arbitrum docker compose run register
```

</code-block>
</CodeGroup>

### RUN!

```bash
COMPOSE_PROFILES=service NETWORK=all docker compose up -d
```

#### Lalu update profile Ethereum (Jika ganti domain, kalo ngga ganti ya ga usah), jika masih menjalankan disana

```bash
COMPOSE_PROFILES=service NETWORK=mainnet docker compose exec -it archaeologist sh
cli update -u --network mainnet
```

```bash
exit
```

