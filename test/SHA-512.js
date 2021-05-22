const Demo = artifacts.require("Demo");
const path = require('path');

const script = path.basename(__filename).split(".")[0]

contract('Demo', (accounts) => {
    
    const testcase = "0x0123456789abcdef"

    it(`should get ${script} of ${testcase}`, async () => {
        const contractInstance = await Demo.deployed();

        const response = await contractInstance.SHA512.call(testcase);
        const rightAnswer = "0x650161856da7d9f818e6047cf6b2092bc7aa3767d3495cfbefe2b710ed684a43ba933ea8286ef67d975e64e0482e5ebe0701788989396545b6badb3b0a136f19"

        // sha-512 online tool: https://emn178.github.io/online-tools/sha512.html
        assert.equal(response, rightAnswer, `wrong answer: ${response}`);
    });

    it(`gas used by ${script}`, async () => {
        const contractInstance = await Demo.deployed();

        const response = await contractInstance.SHA512.estimateGas(testcase);
        console.log(`  ${response} gas used`)

        assert.notEqual(response, 0);
    });
});
