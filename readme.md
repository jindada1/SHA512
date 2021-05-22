# Sha512 [![Build Status](https://travis-ci.com/jindada1/SHA512.svg?branch=master)](https://travis-ci.com/jindada1/SHA512)

`Sha512` is an open source implementation of the sha-512 hash function in solidity.

*DISCLAIMER: This is experimental software. **Use it at your own risk**!*

`Sha512` library provides function for:

+ hash: Calculate the sha-512 of input bytes.

## Test

solc versoin : ` 0.5.17+commit.d19bba13.Emscripten.clang`

```bash
truffle test
```

[online sha512 tool](https://emn178.github.io/online-tools/sha512.html)

## Usage

just import it. 

like `./contracts/Demo.sol` below

```solidity
pragma solidity ^0.5.17;

import "./Sha512.sol";

contract Demo {
    /// @notice count sha512 result of input bytes message
    function SHA512(bytes memory message) public pure returns (bytes memory) {
        uint64[8] memory result = Sha512.hash(message);
        return
            abi.encodePacked(
                uint64(result[0]),
                uint64(result[1]),
                uint64(result[2]),
                uint64(result[3]),
                uint64(result[4]),
                uint64(result[5]),
                uint64(result[6]),
                uint64(result[7])
            );
    }
}
```

## Gas

Gas consumption (on truffle test network)

| Contract | Method | input              | gas    |
| -------- | ------ | ------------------ | ------ |
| Demo     | SHA512 | 0x0123456789abcdef | 247336 |

## Acknowledgements

+ [Federal Information Processing Standards Publication 180-2](https://csrc.nist.gov/csrc/media/publications/fips/180/2/archive/2002-08-01/documents/fips180-2.pdf)