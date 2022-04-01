// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Filet is ERC721URIStorage {
    address _owner;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    uint256 totalSupply = 10000;

    constructor() ERC721("Filet", "FIL") {
        _owner = msg.sender;
    }

    function _mintToken(string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        require(newTokenId < totalSupply);
        _mint(address(this), newTokenId);
        _setTokenURI(newTokenId, _tokenURI);
        return newTokenId;
    }

    function transfer(uint256 tokenId) {
        _safeTransfer(address(this), msg.sender, tokenId);
    }
}
