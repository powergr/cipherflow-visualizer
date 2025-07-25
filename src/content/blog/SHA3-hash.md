---
title: "Understanding SHA-3 (Keccak): The Latest NIST Standard in Cryptographic Hashing"
description: "SHA-3, also known as **Keccak** (pronounced 'ketchak'), is the newest member of the Secure Hash Algorithm family standardized by NIST."
difficulty: "beginner"
pubDate: 2025-07-18
author: "Pashalis Laoutaris"
category: "Hash Functions"
thumbnail: "./images/sha3-hash.jpg"
thumbnailAlt: "A visual representation of the SHA-3 hashing algorithm."
visualizer: "SHA3Visualizer"
tags: ["Hashing", "SHA-3", "Keccak", "Cryptography", "NIST"]
draft: false
---

## Understanding SHA-3 (Keccak): The Latest NIST Standard in Cryptographic Hashing

SHA-3, also known as **Keccak** (pronounced "ketchak"), is the newest member of the Secure Hash Algorithm family standardized by NIST. Designed to complement SHA-2 rather than replace it, SHA-3 brings a fundamentally different construction and offers robust security for modern digital applications. This article explores SHA-3’s history, variants, how it works, its advantages, why it’s considered future-ready, the latest developments, and a list of reliable references.

## Table of Contents

1. [History of SHA-3 (Keccak)](#history-of-sha-3-keccak)
2. [SHA-3 Variants and Use Cases](#sha-3-variants-and-use-cases)
3. [How SHA-3 Works: A Detailed Guide](#how-sha-3-works-a-detailed-guide)
4. [Pros and Cons of SHA-3](#pros-and-cons-of-sha-3)
5. [Why SHA-3 is the Modern Standard](#why-sha-3-is-the-modern-standard)
6. [Latest News about SHA-3](#latest-news-about-sha-3)
7. [FAQ](#faq)
8. [References](#references)

## History of SHA-3 (Keccak)

In 2007, NIST announced a public competition to develop a new hash function standard, seeking a "backup" for SHA-2 in case vulnerabilities were discovered. The competition saw over 60 candidates, with the Keccak algorithm—developed by Guido Bertoni, Joan Daemen, Michaël Peeters, and Gilles Van Assche—emerging as the winner in 2012.

Keccak was standardized as **FIPS 202 (SHA-3)** in August 2015. Its innovative “sponge construction” and resistance to known attack vectors set it apart from earlier hash functions.

---

## SHA-3 Variants and Use Cases

SHA-3 is a family of hash functions with multiple output sizes, plus two unique extendable-output functions (XOFs):

| **Variant**     | **Digest Size** | **Construction**        | **Typical Use**      |
|-----------------|-----------------|------------------------|----------------------|
| SHA3-224        | 224 bits        | Sponge                  | Short hash/signature |
| SHA3-256        | 256 bits        | Sponge                  | General security     |
| SHA3-384        | 384 bits        | Sponge                  | High security        |
| SHA3-512        | 512 bits        | Sponge                  | Very high security   |
| SHAKE128        | Variable        | Extendable-output (XOF) | Hash, KDF, masking   |
| SHAKE256        | Variable        | Extendable-output (XOF) | Hash, KDF, masking   |

- **SHA3-256** is the most widely used and often recommended for general-purpose security.
- **SHAKE128/256** can produce outputs of arbitrary length, making them ideal for variable-size digests, key derivation, and masking.

---

## How SHA-3 Works: A Detailed Guide

SHA-3’s core innovation is the **sponge construction**, a flexible method for absorbing input data and squeezing out a hash of any length.

### 1. **Sponge Construction**

- **State:** SHA-3 uses a fixed-size state (1600 bits for SHA3-256/512, etc.).
- **Absorbing Phase:** The message is divided into blocks and XORed into the state, then a permutation function (Keccak-f) is applied.
- **Padding:** The input is padded with a simple, secure scheme (multi-rate padding).
- **Squeezing Phase:** After all input is absorbed, the state is repeatedly permuted and output is extracted (“squeezed”) to generate the final hash.

### 2. **Keccak-f Permutation**

- The permutation operates on a 5×5×w array (where w = 64 bits for SHA-3), using five simple bitwise operations (theta, rho, pi, chi, iota) in 24 rounds.
- This structure provides strong diffusion and resistance to cryptanalytic attacks.

### 3. **Output**

- The hash is the first n bits of the squeezed output, where n is the digest size (e.g., 256 bits for SHA3-256).

#### Example Pseudocode

Initialize 1600-bit state to zero
Pad the input message
For each block:
    XOR block into the state
    Apply the Keccak-f permutation
Output: Squeeze state to get the required number of output bits

## Pros and Cons of SHA-3

|**Pros**|**Cons**|
|---|---|
|Completely different design from SHA-2|Slower in software than SHA-2 for short data|
|Excellent security margin|Newer; less widely adopted in legacy systems|
|No known practical attacks|Fewer hardware accelerators (but growing)|
|Very flexible (variable output sizes/XOFs)|Slightly more complex to implement|
|Resistant to length-extension attacks||
|Efficient in hardware||

## Why SHA-3 is the Modern Standard

- **Strong Security:** SHA-3 is resistant to all known attacks, including collision, pre-image, and length-extension attacks.
- **Innovative Construction:** The sponge paradigm allows for extendable output and new cryptographic primitives (like KMAC, cSHAKE).
- **Complement to SHA-2:** SHA-3 is not a replacement but an alternative, providing diversity in cryptographic design and defense in depth.
- **Regulatory Endorsement:** Standardized by NIST as [FIPS 202](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf) and required in some modern protocols.
- **Post-Quantum Research:** While not quantum-resistant, SHA-3 is being studied for use in post-quantum cryptosystems, and its structure supports new cryptographic applications.

## Latest News about SHA-3

- **2024:** SHA-3 and SHAKE are seeing increased adoption in new cryptographic protocols, including post-quantum algorithms and digital signature schemes.
- **Hardware Support:** Modern CPUs (e.g., Intel with SHA Extensions) and many FPGAs now offer hardware acceleration for SHA-3.
- **Standardization:** NIST has released [SP 800-185](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-185.pdf) defining additional modes like KMAC (Keyed MAC) and cSHAKE (customizable SHAKE).
- **Use in Blockchain:** Some cryptocurrencies and blockchain protocols are exploring or implementing SHA-3 variants for future-proofing.
- **Software Ecosystem:** All major cryptographic libraries (OpenSSL, BoringSSL, libsodium, Python’s hashlib, etc.) now support SHA-3.

## FAQ

### What is SHA-3 and how does it work?

SHA-3 (Keccak) is a cryptographic hash function family using a sponge construction to produce fixed or variable-length hashes (e.g., 256 bits for SHA3-256). It absorbs input data into a state, applies permutations, and squeezes out the hash.

### How is SHA-3 different from SHA-2?

SHA-3 uses a sponge construction, unlike SHA-2’s Merkle-Damgård structure, making it resistant to length-extension attacks and supporting variable-length outputs (SHAKE). SHA-3 is a complementary alternative, not a replacement, for SHA-2.

### Why was SHA-3 developed?

SHA-3 was developed as a backup to SHA-2 in case vulnerabilities were found. Selected through a NIST competition in 2012, its unique design (Keccak) enhances cryptographic diversity and supports new applications like key derivation.

### What are the main use cases for SHA-3?

SHA-3 is used for digital signatures, data integrity checks, key derivation (via SHAKE), and emerging applications like post-quantum cryptography and blockchain. SHA3-256 and SHAKE256 are particularly popular for general security.

### Is SHA-3 more secure than SHA-2?

SHA-3 and SHA-2 both have no known practical attacks, but SHA-3’s sponge construction offers resistance to length-extension attacks and greater flexibility. SHA-2 remains widely used due to its speed and established adoption.

### Is SHA-3 quantum-resistant?

SHA-3 is not quantum-resistant, as quantum computers could theoretically weaken its security (e.g., via Grover’s algorithm). However, its design is being studied for post-quantum applications, and no practical quantum attacks exist yet.

### Why is SHA-3 relevant in 2025?

SHA-3’s relevance stems from its strong security, flexibility (variable outputs via SHAKE), and growing adoption in modern protocols, blockchain, and post-quantum research. It complements SHA-2 as a future-proof cryptographic standard.

## References

- [NIST FIPS 202: SHA-3 Standard](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf)
- [NIST SP 800-185: SHA-3 Derived Functions](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-185.pdf)
- [SHA-3 (Keccak) Project](https://keccak.team/)
- [Wikipedia: SHA-3](https://en.wikipedia.org/wiki/SHA-3)
- [SHA-3 Announcement (NIST)](https://www.nist.gov/news-events/news/2015/08/nist-releases-sha-3-cryptographic-hash-standard)
- [OWASP Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)

> **Note:** For new cryptographic designs and applications, SHA-3 is an excellent choice, especially for future-proofing and interoperability with upcoming standards.
