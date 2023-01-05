// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {ERC721, Strings} from '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import {ERC721URIStorage} from '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import {Counters} from '@openzeppelin/contracts/utils/Counters.sol';
import {Ownable} from '@openzeppelin/contracts/access/Ownable.sol';
import {Base64} from '@openzeppelin/contracts/utils/Base64.sol';

// Deployed on Mumbai 0x14f7584c0B1FdD79F62EA32DF9d3cdd96e516cA6

contract MusicReview is ERC721, ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;
  using Strings for uint256;

  Counters.Counter private _tokenIdCounter;

  struct Review {
    string title;
    string body;
    uint256 upvotes;
  }

  event Upvote(address indexed from, uint256 timestamp);

  mapping(uint256 => Review) public tokenIdToReviews;

  // NFT base metadata
  string public external_url =
    'https://davidqingwebsite.firebaseapp.com/api/svg/?tokenId=';
  string public image_data_url =
    'https://davidqingwebsite.firebaseapp.com/api/?tokenId=';

  constructor() ERC721('MusicReview', 'MUSIREV') {}

  // Methods to change NFT base metadata after deployment if needed
  function setExternalUrl(string memory _url) public onlyOwner {
    external_url = _url;
  }

  function setImageDataUrl(string memory _url) public onlyOwner {
    image_data_url = _url;
  }

  function getReview(uint256 tokenId) public view {
    require(_exists(tokenId), 'Review does not exist!');
  }

  /**
    @dev mints new music review nft
    @param title title to give music review
    @param body music review body text
  */
  function mint(string memory title, string memory body) public {
    uint256 tokenId = _tokenIdCounter.current();
    _tokenIdCounter.increment();
    _safeMint(msg.sender, tokenId);
    tokenIdToReviews[tokenId] = Review({title: title, body: body, upvotes: 0});
    _setTokenURI(tokenId, tokenURI(tokenId));
  }

  /**
  @dev cast upvote for a music review and updates uri
  @param tokenId music review id to upvote
  */
  function upvote(uint256 tokenId) public {
    require(_exists(tokenId), 'Please upvote an existing review.');
    tokenIdToReviews[tokenId].upvotes += 1;
    _setTokenURI(tokenId, tokenURI(tokenId));

    emit Upvote(msg.sender, block.timestamp);
  }

  /**
  @dev overrides default tokenURI and returns in base64 json format
  @param tokenId returns uri for the specified tokenid 
  */
  function tokenURI(
    uint256 tokenId
  ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
    require(
      _exists(tokenId),
      'ERC721Metadata: URI query for nonexistent token'
    );

    string memory tokenString = tokenId.toString();
    Review memory review = tokenIdToReviews[tokenId];

    // must escape json strings when minting! else this will break
    bytes memory json = abi.encodePacked(
      '{',
      '"name": "Music Review #',
      tokenString,
      ': ',
      review.title,
      '",',
      '"description": "',
      review.body,
      '",',
      '"external_url": "',
      external_url,
      tokenString,
      '",',
      '"image_data": "',
      image_data_url,
      tokenString,
      '",',
      '"attributes": [{"trait_type": "Upvotes", "value": ',
      review.upvotes.toString(),
      '}]',
      '}'
    );

    return
      string(
        abi.encodePacked('data:application/json;base64,', Base64.encode(json))
      );
  }

  // The following functions are overrides required by Solidity.
  function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
    super._burn(tokenId);
  }
}
