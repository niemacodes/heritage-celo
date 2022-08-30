const hre = require("hardhat");
const { artifacts } = require("hardhat");

async function main() {
  const HeritageNFT = await hre.ethers.getContractFactory("HeritageNFT");
  const heritageNFT = await HeritageNFT.deploy();

  await heritageNFT.deployed();

  console.log("HeritageNFT deployed to:", heritageNFT.address);
  storeContractData(heritageNFT);
}

function storeContractData(contract) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/HeritageNFT-address.json",
    JSON.stringify({ HeritageNFT: contract.address }, undefined, 2)
  );

  const HeritageNFTArtifact = artifacts.readArtifactSync("HeritageNFT");

  fs.writeFileSync(
    contractsDir + "/HeritageNFT.json",
    JSON.stringify(HeritageNFTArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });