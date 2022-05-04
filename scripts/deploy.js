const hre = require("hardhat");

async function main() {
  const Hai = await hre.ethers.getContractFactory("Hai");
  // 部署本身就是初始化
  const haixin = await Hai.deploy(100);

  await haixin.deployed();

  console.log("Greeter deployed to:", haixin.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
