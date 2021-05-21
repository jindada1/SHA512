var CKDPub = artifacts.require("Demo.sol");
var Sha512 = artifacts.require("Sha512.sol");

module.exports = function (deployer) {
    deployer.deploy(Sha512);
    deployer.link(Sha512, CKDPub);
    deployer.deploy(CKDPub);
};