
const web3 = new Web3(window.ethereum);
let accounts;
document.addEventListener('DOMContentLoaded', () => {
    web3.eth.getAccounts()
    .then( _accounts => {
        const address = document.getElementById('address');
        address.innerHTML = _accounts[0];
        const ad = `${address.innerHTML.slice(0,14)}....`;
        address.innerHTML = ad;
    });
})