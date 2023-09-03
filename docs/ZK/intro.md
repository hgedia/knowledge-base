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
a trusted setup. They achive this by using interactive oracle proofs (IOP) or Holographic proving systems(AHP).

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



#### References

 - [Introduction to Zero Knowledge Proofs](https://www.youtube.com/watch?v=BT88s7_VtC8&t=37s) - Elena Nadolinski
 - [Zero-Knowledge Proofs: STARKs vs SNARKs](https://consensys.net/blog/blockchain-explained/zero-knowledge-proofs-starks-vs-snarks/)