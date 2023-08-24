---
sidebar_position: 1
---

# Modular/Monolithic 

In monolithic blockchain networks, there is a single process (application) which does the activity of consensus, settlement
and execution. Modular networks , break the responsibilities out into different processes. As an example pre ETH 2.0,
`geth` was responsible for all the above-mentioned activities to keep the network operational. After ETH 2.0, the layers
of consensus and execution have now been seperated allowing more variety of clients to cross-communicate.

# Rollup's
The rollup centric vision of Ethereum, execution is carried off chain (L2) but settlement happens on chain(L1). There
are strong security guarantees provided by mechanisms of fraud or validity proofs. As you move away from the 
L1, L2 systems centralise a number of sub-systems. This is done to improve the performance/fees incurred by the user.
It is also viewed as "progressive decentralization" roadmap, i.e. with time these components will be decentralized. 
On the flip side some projects take the base assumption is that , as long as L1 is providing security, 
this is a non-issue.

# Sequencer

L2 systems centralize the first touch point of the transaction flow. Sequencer is the process which intercepts the user 
transaction. Sequencer is only responsible for sequencing the incoming transactions and post them to the L1 systems. 
The execution is carried out by different process called validator nodes. Centralizing sequencer thus
results in cheaper/faster transactions on L2 networks. This however can result in the following issues
1. Your transaction can be censored by sequencer. 
2. If the sequencer faces downtime, the network can be halted.
3. Sequencer becomes the only participant who can extract MEV.

Most L2 projects do allow a "slow" transaction mechanism which posts the transaction to L1 instead of L2 sequencer
to get around item (1).


# Shared sequencer

Shared sequencer architecture removes the above risks by introducing a network of sequencers. The process thus becomes
fault-tolerant to attacks. Sequencers choose their own consensus to pick a leader to generate the block. This addresses
all the above issues mentioned. Another breakthrough shared sequencers can provide is the ability to have a common
sequencer for more than one rollup networks. This provide a nice property of atomic cross-chain transactions. 


