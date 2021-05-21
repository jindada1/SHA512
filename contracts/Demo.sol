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
