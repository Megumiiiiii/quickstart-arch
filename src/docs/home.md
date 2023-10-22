---
title: Installation
---

### Official Links
- [Twitter](https://twitter.com/sarcophagusio)
- [Discord](https://discord.gg/sarcophagus-community-753398645507883099)
- [Website](https://sarcophagus.io/)


## Minimum requirements

| Spec | Size |
|------|-----|
| 20GB | SSD |
|      |     |
| 2GB  | RAM |

## Prerequisites

- Git
- [Dokcer >= 20.0](https://www.simplilearn.com/tutorials/docker-tutorial/how-to-install-docker-on-ubuntu)
- [Dokcer compose >= 2.0.0)](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually)
- Server must have ports 80 and 443 open
- ETH wallet ( Private Key & Mnemonic )
    > ETH balance (for signing transactions)
    >
    > SARCO balance (for bonding your archaeologist to curses)
- RPC wss:// URL (Infura, Alchemy, etc.)
- Domain name pointed at your server's IP address

*If running on Goerli (chain id = 5), then you will need Goerli ETH + Goerli SARCO.*

### Setup DNS Record
- Go to the domain management
- Add DNS Records.
- Select *A*.
- Enter your name and your public IP as a value.
- Save
  
## Install Dependencies
```bash
sudo apt update; sudo apt upgrade
```
```bash
sudo apt-get update && sudo apt install git -y && sudo apt install apt-transport-https ca-certificates curl software-properties-common -y && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - && sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable" && sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y
```

### Open Port
```bash
sudo ufw allow ssh; sudo ufw allow 443/tcp; sudo ufw allow 80/tcp; sudo ufw enable
```

## Clone Repo
```bash
git clone https://github.com/sarcophagus-org/quickstart-archaeologist
cd quickstart-archaeologist
```

### Copy `.env.sample` to `.env`
```bash
cp .env.example .env
```

### Generate Mnemonic Pharse

- [Here](https://iancoleman.io/bip39/)

**BACKUP**

### Create a blank `peer-id.json` file

```bash
touch peer-id.json
```

### Edit `.env` file
```bash
nano .env
```
Fill in your data


1. `ETH_PRIVATE_KEY` is your Private Key which has ETH/Matic and $SARCO
2. `NOTIFICATION_WEBHOOK_URL` is your discord webhook url. You can follow the instructions here to set up a [discord webhook url](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)


- Example ↓ ↓ ↓

<CodeGroup>
<code-block title="Both Chain">

```bash
## Key used to encrypt secrets and sign ETH transactions
## The address associated with this key is your archaeologist identifier
ETH_PRIVATE_KEY=ugfhttawfihqwoid132b1231b23

## (optional) multiply gas price estimation by this amount (i.e. 2 means 2x RPC gas price estimate)
## GAS_MULTIPLIER=
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
CHAIN_IDS=1,137

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
## GAS_MULTIPLIER=
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
## GAS_MULTIPLIER=
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
</CodeGroup>

### $SARCO Token
- To get $SARCO, you can swap them on Uniswap
- Go to https://app.uniswap.org/
- SC Sarco: `0x7697B462A7c4Ff5F8b55BDBC2F4076c2aF9cF51A`

## Register

If you want to run on multiple chain, you need to registering 1 by 1.


<CodeGroup>
<code-block title="Ethereum">


```bash
COMPOSE_PROFILES=register NETWORK=mainnet docker compose run register
```
- Y, Enter
- Then enter the nominal ( recommended: DiggingFee 100 - 500, CurseFee 300, and FreeBond 1000 )

</code-block>
<code-block title="Polygon">

```bash
COMPOSE_PROFILES=register NETWORK=polygonMainnet docker compose run register
```
- Y, Enter
- Then enter the nominal ( recommended: DiggingFee 1 - 5, CurseFee 1-5, and FreeBond 1000 )

</code-block>
</CodeGroup>


**Then enter the nominal ( recommended: DiggingFee 100 - 500, CurseFee 300, and FreeBond  1000 )**

Ouput:
```bash
=========================================================================================================

ARCHAEOLOGIST PROFILE: 

FIELD                      VALUE                                                                       
exists                     true                                                                        
maximumRewrapInterval      200 days (17280000s)                                                        
maximumResurrectionTime    Dec 30 2023 (1703953499)                                                    
peerId                     sarcophagus.example.xyz:12D3KooWRkyaFVBDFaaf3D5piG1YRJjCMSgBMj9Si4xjFDaRqjSCX
minimumDiggingFeePerSecond 0.000153712226361799 SARCO (~ 400.00/month)                                 
freeBond                   1000.0SARCO                                               
cursedBond                 0 SARCO                                                
curseFee                   300.0 SARCO                                                                 
address                    0x897015991ABC646a69EC8701B8459aA806aCf70a                                  

=========================================================================================================
```

### Start the node
```bash
COMPOSE_PROFILES=service NETWORK=all docker compose up -d
```


## Useful Command 

#### Check Archaeologist Service's logs

```bash
docker logs -f quickstart-archaeologist-archaeologist-1
```

#### Check Acme Companion's logs

```bash
docker logs -f  quickstart-archaeologist-acme-companion-1
```

#### Check Nginx's logs

```bash
docker logs -f nginx-proxy
```
	
#### Updating the service

```bash
cd ~/quickstart-archaeologist
git pull
COMPOSE_PROFILES=service NETWORK=all docker compose stop
COMPOSE_PROFILES=service NETWORK=all docker compose pull
COMPOSE_PROFILES=service NETWORK=all docker compose up -d
```

#### Restarting the service

```bash
COMPOSE_PROFILES=service NETWORK=all docker compose stop
COMPOSE_PROFILES=service NETWORK=all docker compose up -d
```

#### Update domain

<CodeGroup>
<code-block title="Ethereum">

```
NETWORK=all docker compose exec -it archaeologist sh
cli update -u -n mainnet
```
```
exit
```

</code-block>
<code-block title="Polygon">

```
NETWORK=all docker compose exec -it archaeologist sh
cli update -u -n polygonMainnet
```
```
exit
```

</code-block>
</CodeGroup>

#### Updating Digging Fee

<CodeGroup>
<code-block title="Ethereum">

```bash
NETWORK=all docker compose exec -it archaeologist sh
cli update -d 300 -n mainnet
```
```bash
exit
```
300 can be changed to any amount

</code-block>
<code-block title="Polygon">

```bash
NETWORK=all docker compose exec -it archaeologist sh
cli update -d 300 -n polygonMainnet
```
```bash
exit
```
300 can be changed to any amount

</code-block>
</CodeGroup>

#### Updating Free Bond 

<CodeGroup>
<code-block title="Ethereum">

```bash
NETWORK=all docker compose exec -it archaeologist sh
cli update -f 100 -n mainnet
```
```bash
exit
```
100 can be changed to any amount

</code-block>
<code-block title="Polygon">

```bash
NETWORK=all docker compose exec -it archaeologist sh
cli update -f 100 -n polygonMainnet
```
```bash
exit
```
100 can be changed to any amount

</code-block>
</CodeGroup>

#### CheckProfile

<CodeGroup>
<code-block title="Ethereum">

```bash
NETWORK=all docker compose exec -it archaeologist sh
cli view -p -n mainnet
```
```bash
exit
```

</code-block>
<code-block title="Polygon">

```bash
NETWORK=all docker compose exec -it archaeologist sh
cli view -p -n polygonMainnet
```
```bash
exit
```

</code-block>
</CodeGroup>

#### Claim Rewards

<CodeGroup>
<code-block title="Ethereum">

```bash
NETWORK=all docker compose exec -it archaeologist sh
cli claim -n mainnet
```
```bash
exit
```

</code-block>
<code-block title="Polygon">

```bash
NETWORK=all docker compose exec -it archaeologist sh
cli claim -n polygonMainnet
```
```bash
exit
```

</code-block>
</CodeGroup>

#### Withdraw Free Bond

<CodeGroup>
<code-block title="Ethereum">

```bash
NETWORK=all docker compose exec -it archaeologist sh
cli free-bond -w 10 -n mainnet
```
```bash
exit
```
10 can be changed to any amount

</code-block>
<code-block title="Polygon">

```bash
NETWORK=all docker compose exec -it archaeologist sh
cli free-bond -w 10 -n polygonMainnet
```
```bash
exit
```
10 can be changed to any amount

</code-block>
</CodeGroup>

#### any other

<CodeGroup>
<code-block title="Ethereum">

```bash
NETWORK=all docker compose exec -it archaeologist sh
cli help -n mainnet
```
```bash
exit
```

</code-block>
<code-block title="Polygon">

```bash
NETWORK=all docker compose exec -it archaeologist sh
cli help -n polygonMainnet
```
```bash
exit
```

</code-block>
</CodeGroup>

### Troubleshooting

- Domain A Record

Your domain must have an A record pointing at the IP address of your server that the archaeologist service is running on.
https://www.nslookup.io/website-to-ip-lookup
Use this tool to confirm that your domain is pointed correctly.

- Test Websocket Connection

https://www.piesocket.com/websocket-tester
Test that your Archaeologist can have websocket connection open by entering your websocket address in this format:
```
wss://your.domain/p2p/yourPeerID
```
To get your domain and peerID, run: [Check Profile](#checkprofile)



#### ⚠️ If you want to delete ⚠️


```bash 
cd ~/quickstart-archaeologist
COMPOSE_PROFILES=service docker compose down -v
docker rmi jwilder/nginx-proxy nginxproxy/acme-companion ghcr.io/sarcophagus-org/sarcophagus-v2-archaeologist-service
```
