import { ethers } from 'hardhat';

const main = async () => {
  const MusicReview = await ethers.getContractFactory('MusicReview');
  const musicReview = await MusicReview.deploy();
  await musicReview.deployed();

  console.log('MusicReview deployed to: ', musicReview.address);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
