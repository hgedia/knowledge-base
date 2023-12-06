---
sidebar_position: 1
---

# Introduction

Zero knowledge proof is the ability to explain honest computation without revealing inputs. They can be used for 
scalability (Starknet, zkSync) and privacy (Tornado cash). ZKPs must satisfy three properties.

1. _Completeness_ : If a statement is true , an honest prover can always convince a honest verifier.
2. _Soundness_ : If a statement is false, a dishonest prover can't convince a honest verifier. Being probablistic, this 
very low.
3. _Zero Knowledge_: The verifier learns nothing apart from the fact the statement is true.


# SNARK Construction

1. Transform the statement into polynomials
2. You have provers, verifiers and challeange.
3. To make the challenge non-interactive , you need a CRS (Common reference string) - created as a trusted setup.
4. CRS is encrypted as it needs to be reused. This is done by multiplying encrypted values with elliptic curves 
resulting in elliptic curve pairings.

# SNARK Evaluation
1. Prover time.
2. Proof size. (192 bytes groth16)
3. Verification time.

Systems like groth16 need a trusted setup to generate CRS. A variant of this could be a universal trusted setup where
this ceremony needs to be done only once , instead per interaction. 

Proof systems like PLONK,Halo,STARKS do not require
a trusted setup. They achieve this by using interactive oracle proofs (IOP) or Holographic proving systems(AHP).

# Terminology

"I know a secret such that H(secret) = hashvalue"

- Statement(x) : public data what we are proving - hashvalue
- Witness(w): private data - secret
- Relation(R): What is the relationship between x & w? Ex: if R(x,w) is true if x == H(x)


# SNARKs vs STARKS

## SNARKS
-  Zk-SNARKs at their base depend upon elliptic curves for their security. Elliptic curves in cryptography operate under
the base assumption that finding the discrete logarithm of a random elliptic curve element with respect to a publicly
known base point is infeasible.
- zk-SNARKs require a trusted setup.
- ZK-SNARKS are not quantum resistant

## STARKS

- STARKs relies on hash functions.
- STARKS do not require a trusted setup
- STARKS are quantum resistant.



## Powers of Tau Ceremony

Because of their advantages, zkSNARKs are not going away anytime soon. But the reality is that the security of a system 
based on zkSNARKs largely boils down to how the CRS was generated. Doing so without compromising the ideals of 
privacy-preserving blockchain-based systems: (security and decentralization) is very important. The generation of 
public parameters for zkSNARKs is called the “setup ceremony” because of its importance and (as we will see) 
the need for multiple independent parties to contribute to the process.


So far, the preferred technique for setup ceremonies has been multi-party computation (MPC). Setup ceremony MPC schemes 
are interactive protocols involving multiple parties who contribute randomness to iteratively construct the CRS. 
Key to this technique is that all parties need to keep the inputs (their sampled randomness) hidden. In fact, 
honest participants should delete this “toxic waste,” immediately. Otherwise, a malicious party with knowledge 
of these inputs could exploit the underlying mathematical structure of the CRS to create unsound proofs.


A typical ceremony consists of number of players, the coordinator, and the verifier. The MPC protocols are always of a 
round-robin nature, where a player receives a single message from player. Player(n-1) adds their input to accumulated 
randomness before passing it onto Player(n) . In the end, the final result is the CRS. 
In the intermediate state, as it is being passed between players, the message is referred to as the “transcript.”

Zcash used the BCGTV scheme to generate the CRS for the first version of ZCash.Despite its novelty, a drawback of the
BCGTV protocol requires that participants be identified in advance. So participation in the ceremony was cumbersome 
and limited to experts who could be trusted to perform it properly.

In 2017, Bowe et al. introduced a second family of MPC protocols [BGM17] specifically for pairing-based zk-SNARKs 
like Groth16. This paper aimed to address some of the drawbacks of prior schemes. In their proposed protocol called 
MMORPG, a central “coordinator” manages messages between the participants. The CRS is generated in two phases. 
The first phase referred to as “Powers of Tau”, produces generic setup parameters that can be used for all 
circuits of the scheme, up to a given size. The second phase converts the output of the Powers of Tau phase 
into an NP-relation-specific CRS.

The “Powers of Tau” ceremony has several advantages over earlier schemes. First, contributors do not need to be selected
in advance. Instead, the protocol uses a random beacon that produces public, random values at set intervals to enable
a continuous ceremony. Participants, therefore, do not always need to be available and online. The random beacon also 
ensures public verifiability of the coordinator. As a result, the protocol can theoretically support 
hundreds or even thousands of participants.

#### References

 - [Introduction to Zero Knowledge Proofs](https://www.youtube.com/watch?v=BT88s7_VtC8&t=37s) - Elena Nadolinski
 - [Zero-Knowledge Proofs: STARKs vs SNARKs](https://consensys.net/blog/blockchain-explained/zero-knowledge-proofs-starks-vs-snarks/)
 - [Powers of Tau](https://zkproof.org/2021/06/30/setup-ceremonies/)