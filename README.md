# n8n-nodes-_node-CryptoWalletBalance_

This is an n8n community node. It lets you use _node-CryptoWalletBalance_ in your n8n workflows.
This repo contains the Cryptowalletbalance community node.
With this node you can retrieve the balance of your ETH (Ethereum) wallet.

## n8n-Cryptowalletbalance made possible by:

Developers:

- @Bunyamin-1058754(Git)
  Bunyamin E. Bölükbas

* @Kerem-1034003 (Git)
  Kerem Yildiz

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Installation

Follow the [Installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

This is what you need to have installed:

- [git](https://git-scm.com/downloads)
- Node.js and npm. Minimum version Node 16.
  Instructions to install both with nvm:
  for Linux, Mac, and WSL(https://github.com/nvm-sh/nvm).
  for Windows(https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
- n8n install by:
  ```
  npm install n8n -g
  ```

## Test setup manual

1. open your terminal
2. run npm i to install the dependencies
3. In your terminal, type (cmd,powershell) in your folder nmp run build
4. In your terminal, type (cmd,powershell) in your folder npm link

5. Open cmd as administrator
6. Open folder example:
   c:\users\YK_61
7. Create a nodes file in your n8n folder
   cd .n8n
   cd mkdir nodes
   cdnodes

8. c:\users\Yk_61\n8n\users> npm link n8n-nodes-cryptwalletbalance
9. c:\users\Yk_61\n8n\users> n8n start --tunnel
10. Then type o and you will arrive at the n8n page
11. Create a new workspace
12. Click on the plus sign and search for Crypto Wallet Balance, email trigger, discord bot
13. Click on execute and the email trigger will wait until it receives an email
14. so the next step is to send a e-mail to this adress n8nwalletchecker@outlook.com, you can send the email from your own e-mail account.
15. In the e-mail you have to use you wallet adress. you can write it in the subject and discription
    If you don't have acces to a wallet, you can use these 2 wallets as a test example:

Wallet 1: 0x07359d76AC5F100b20e3Bf612580b8779f37faf8
Wallet 2: 0x1fC8aC0aBfD72D38cdEE48991c7816FFE76608fb

15. after you sended the email it wil execute and you wil receive the wallet balance on you discord bot.

## Test Description

[flowchart of testing the node](https://github.com/Rac-Software-Development/werkplaats-5-cloudshift-n8n-zwarte-zee/blob/main/testing.png)
In the flowchart we have described how we have tested the node.
Step 1 - Input:
In the first step we have implemented a crypto wallet adress witch was containing a small amount of ETH.
Step 2 - Execution:
After clicking on the execute node button, we can see that the wallet is making connection with the ETHEREUM network. The result is: 22577964308876745.
Step 3 - Output:
This is the corresponding amount of ETH in the wallet. The only problem is that the formatting is wrong.
There are missing 0,0 in front of the transaction. This is necessary because otherwise the amount of ETH will be misinterpreted.
In the next version we will solve this problem and will this bug be crushed.

## Limitations of the Code

In this release the wallet ballance will only show the amount of ETH without correct formatting.
We are planning on releasing a newer version that will show the amount of ETH in the correct format.
Current situation: instead of the following wil show the amount of ETH in: .22577964308876745
Desired situation: Amount of ETH: 0,22577964308876745.
Furthermore it would be possible to have a better start trigger like for example, Wallet connect.
In this order it would be possible to have a fully connection between web3/ethers.js and the n8network.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)

https://docs.etherscan.io/
https://www.npmjs.com/package/ethers
https://docs.etherscan.io/getting-started/endpoint-urls
https://docs.ethers.org/v5/getting-started/#installing
https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/#test-your-node
https://docs.n8n.io/hosting/logging-monitoring/logging/

## Version history

Previous Version v1.0.
Release date: 29-10-2023

Current version v1.1.
release date 22-12-2023

## Changes

trigger function {email trigger}
Node in a flow
Logging working

