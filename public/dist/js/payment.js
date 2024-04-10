const abi = [{ "inputs": [{ "internalType": "address", "name": "_usdc", "type": "address" }, { "internalType": "bytes32", "name": "_merkleRoot", "type": "bytes32" }, { "internalType": "string", "name": "_URI", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "ALREADY_CLAIMED", "type": "error" }, { "inputs": [], "name": "CONTRACT_IS_PAUSED", "type": "error" }, { "inputs": [], "name": "INCORRECT_USDC_AMOUNT", "type": "error" }, { "inputs": [], "name": "INVALID_CATEGORY", "type": "error" }, { "inputs": [], "name": "INVALID_MERKLE_PROOF", "type": "error" }, { "inputs": [], "name": "INVALID_QANTITY", "type": "error" }, { "inputs": [], "name": "UNABLE_TO_WITHDRAW", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "USDC", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "category", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "checkWhitelisting", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "", "type": "string" }, { "internalType": "address", "name": "", "type": "address" }], "name": "claimed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isOnlyPhase1", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" }, { "internalType": "bytes32", "name": "leaf", "type": "bytes32" }], "name": "isWhiteListed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxBatchSize", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "merkleRoot", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "_priceUSDC", "type": "uint256" }, { "internalType": "uint256", "name": "_quantity", "type": "uint256" }, { "internalType": "bytes32[]", "name": "merkleProof", "type": "bytes32[]" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_quantity", "type": "uint256" }], "name": "mintAsOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "otherPhasesPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "phase1Price", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "merkleRoot_", "type": "bytes32" }], "name": "setMerkleRoot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "_limit", "type": "uint8" }], "name": "setNftcount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stopPhase1", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stopPhase2", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stopPhase3", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "updateotherPhasesPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "updatephase1Price", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "withdrawUSDC", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
const networkVersion = 0x89;
const contract_address = "0xd67e79341c30331f1EfACe8166A4b4F0Cb72fB74";
var xhttp = new XMLHttpRequest();

async function getContract() {
    window.web3 = new Web3(window.web3.currentProvider);
    window.ethereum.enable();
    window.web3.eth.defaultAccount = window.web3.currentProvider.selectedAddress;
    var contract = new window.web3.eth.Contract(abi, contract_address);
    return contract;
}

async function allWalletAddress() {
    try {
        // console.log(await fetch('/api//root-hash'))
        let response = await fetch('/api/root-hash-front');
        //console.log ~ file: payment.js:810 ~ allWalletAddress ~ response:", response)
        const data = await response.json();
        return data;
    } catch (error) {
        //console.log ~ file: payment.js:815 ~ allWalletAddress ~ error:", error)
        // console.error(error);
        throw error;
    }
}

async function setRootHash() {
    try {
        const allWalletAddress1 = await allWalletAddress();
        //console.log ~ allWalletAddress1:", allWalletAddress1);
        const contract = await getContract();
        // Call contract method and handle the response
        const res = await contract.methods.setMerkleRoot(allWalletAddress1.rootHash).send({ from: window.web3.currentProvider.selectedAddress });
        //console.log ~ file: payment.js:828 ~ setRootHash ~ res:", res)
        return { status: true, message: res.transactionHash };
    } catch (error) {
        //console.log ~ file: payment.js:41 ~ setRootHash ~ error:", error)
        return { status: false, message: error.message };
    }
}
async function deleteRow(address) {
    const wallet_address = {
        address: address
    }
    await fetch('/api/delete-address', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(wallet_address)
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data.message === 'Successfully WalletAddress deleted') {
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        })
        .catch(error => {
            console.error('Error Deleting WalletAddress data:', error);
        });
}
async function csvUpload(event) {
    document.getElementById("status-file").innerHTML = "Loading...";
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = function (e) {
        const contents = e.target.result;
        processCSV(contents);
    };
    reader.readAsText(file);
}

async function processCSV(csvContent) {
    const rows = csvContent.split('\n');
    //console.log ~ file: payment.js:81 ~ processCSV ~ rows:", rows)
    const batchSize = 100;
    const batches = [];

    for (let i = 1; i < rows.length; i += batchSize) {
        const batch = rows.slice(i, i + batchSize);
        batches.push(batch);
    }

    let successfulInsertions = 0;
    const totalBatches = batches.length;
    //console.log ~ file: payment.js:92 ~ processCSV ~ batches:", batches)
    //console.log ~ file: payment.js:92 ~ processCSV ~ totalBatches:", totalBatches)

    for (const batch of batches) {
        try {
            const dataWithoutHeader = batch.map(row => row.split(','));
            //console.log ~ file: payment.js:98 ~ processCSV ~ dataWithoutHeader:", dataWithoutHeader)
            const walletAddresses = dataWithoutHeader
                .filter(row => row.length >= 2)
                .map(row => ({
                    address: row[0].replace(/"/g, "").trim(),
                    category: row[1].replace(/['"]+/g, '').trim()
                }));

            const jsonData = JSON.stringify(walletAddresses);
            //console.log ~ file: payment.js:103 ~ processCSV ~ jsonData:", jsonData)
            const response = await fetch('/api/csvInsert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonData
            });

            if (response.ok) {
                const responseData = await response.json();
                // Process the response data if needed

                successfulInsertions++;
            } else {
                console.error('API request failed:', response);
            }
        } catch (error) {
            console.error('Error processing batch:', error);
        }
    }

    if (successfulInsertions === totalBatches) {
        document.getElementById("status-file").innerHTML = "";
        console.log('All data inserted successfully. Reloading the page...');
        setTimeout(() => {
            window.location.reload();
        }, 300);
    } else {
        console.log('Some data failed to insert. The page will not be reloaded.');
    }
}


async function mint(quantity, receiver) {
    try {
        console.log("call mint function")
        const cont = await getContract();

        const res = await cont.methods.mint(quantity, receiver).send({ from: window.web3.currentProvider.selectedAddress, gasPrice: '111192586569' });

        return { status: true, message: res.transactionHash };
    } catch (e) {
        console.log(e)
        return { status: false, message: e.message };
    }
}


async function ajaxRequest(url, data) {
    return new Promise(function (myResolve, myReject) {
        xhttp.onload = function () {
            let resdata = JSON.parse(this.responseText);
            myResolve(resdata);
        }
        xhttp.onerror = function () {
            let resdata = JSON.parse(this.responseText);
            myReject(resdata);
        }
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xhttp.send(JSON.stringify(data));
    });
}

function pay(quantity, receiver, orderType, id, email) {
    try {
        console.log(quantity, receiver, orderType, id, email)
        if (typeof window.ethereum !== "undefined") {

            window.ethereum._metamask.isUnlocked().then(status => {
                if (status) {
                    //alert("metamsk unlocked")
                    if (window.ethereum.networkVersion != networkVersion) {
                        alert("please connect to polygon network")

                    } else {

                        window.ethereum.request({ method: "eth_requestAccounts" }).then(async (data) => {
                            const mint_res = await mint(quantity, receiver);
                            if (mint_res.status) {

                                ajaxRequest('/api/update-order-status', { orderType: orderType, id: id, transaction_hash: mint_res.message, email: email }).then((response) => {

                                    alert(response.message)
                                    location.reload();
                                })

                            } else {
                                alert(mint_res.message)
                                location.reload();
                            }
                        })
                    }

                } else {
                    alert("metamsk locked")
                    window.ethereum.request({ method: "eth_requestAccounts" }).then((data) => {
                        if (window.ethereum.networkVersion != networkVersion) {
                            alert("please connect to polygon network")

                        } else {

                            window.ethereum.request({ method: "eth_requestAccounts" }).then(async (data) => {
                                const mint_res = await mint(quantity, receiver);
                                if (mint_res.status) {

                                    ajaxRequest('/api/update-order-status', { orderType: orderType, id: id, transaction_hash: mint_res.message, email: email }).then((response) => {

                                        alert(response.message)
                                        location.reload();
                                    })

                                } else {
                                    alert(mint_res.message)
                                    location.reload();
                                }
                            })
                        }
                    });
                }
            })

        }
    } catch (e) {

        console.log("last catch error ", e)

    }
}