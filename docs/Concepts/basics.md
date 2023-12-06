---
sidebar_position: 1
---

# Basics

### Consensus    
A set of computers want to reach agreement that about a single decision (or data item)

Properties of consensus protocol:
- Safety : Everyone should agree, and never forget.
- Liveness How many peers must be online before a decision is final?
   
Blockchains enable trust engineeering. Define, minimize, and if possible remove trust from intermediaries.
Replace it with public, verifiable and programmable programs (smart contracts).

### Smart Contract

A smart contract is a computerized transaction protocol that executes the terms of a contract. 
The general objectives are to satisfy common contractual conditions (such as payment terms, liens, confidentiality, 
and even enforcement), minimize exceptions both malicious and accidental, and minimize the need 
for trusted intermediaries. (Nick Szabo)

They are computer programs stored on the blockchain that follow "if this then that" logic, and are guaranteed to 
execute according to the rules defined by its code, which cannot be changed once created.

A smart contract will : 
- I will never modify or change your code.
- I will always run the code you tell me too (assuming the code itself allows me!).
- I will never let code execution “stop half way” it is ALL or NOTHING with me.
- I like to gossip and I can’t keep secrets - Everything you tell me will be public knowledge.

### Accounts
- Externally owned accounts: controlled by people/keys
- Contract accounts: controlled by smart contract code + storage

### Transactions (ETH)

- Value Transaction: Transfer coins from an externally owned account to another account
- Creation Transaction: The code of a smart contract is stored in a transaction’s payload and sent to the Blockchain.
- Invocation Transaction: The commands to invoke code in the contract is stored in a transaction’s payload and sent to the Blockchain.

Gas is paid as a unit of comutation for transactions.

### Primitives

#### Hash 
- Pre-image : Input data (Variable)
- Hash : Computed hash of pre-image. (Fixed length)

One-way pseudorandom (and collision-resistant) function h = hash(x)

Properties
- Preimage Resistance : Given a hash value h it should be difficult to find any message m such that h = hash(m).In other words, 
the hash h provides “no clues or hints” about the input.
- Second Preimage Resistance : Given an input m1, it should be difficult to find a different input m2 such 
that hash(m1) = hash(m2).
- Collision-Resistance : Basically, there cannot be ANY collisions for ANY pair of messages.

Collision resistance is about the infeasibility of finding two distinct inputs m and m' such that h(m) = h(m'). 
The attacker gets to choose m and m' arbitrarily, as long as he ends up with two distinct messages that hash to the same value.
Second-preimage resistance is very similar except that the attacker does not get to choose m. 
Instead, we give him m, and challenge him with finding m' (distinct from m) such that h(m) = h(m').

A second-preimage is also a collision, but we keep the concept distinct because second-preimages are supposed to be 
substantially harder.



--- 
References
-  [Introduction to Blockchains](https://pisa.watch/) - [Patrick McRorry](https://twitter.com/stonecoldpat0)