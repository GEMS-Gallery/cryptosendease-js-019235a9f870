import { backend } from 'declarations/backend';

document.getElementById('sendForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const recipient = document.getElementById('recipient').value;
    const amount = parseInt(document.getElementById('amount').value);

    try {
        const result = await backend.sendCrypto(recipient, amount);
        document.getElementById('message').textContent = result;
        updateTransactionHistory();
    } catch (error) {
        document.getElementById('message').textContent = `Error: ${error.message}`;
    }
});

async function updateTransactionHistory() {
    const transactions = await backend.getTransactionHistory();
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.forEach(tx => {
        const li = document.createElement('li');
        li.textContent = `To: ${tx.to}, Amount: ${tx.amount}, Time: ${new Date(Number(tx.timestamp) / 1000000).toLocaleString()}`;
        transactionList.appendChild(li);
    });
}

updateTransactionHistory();
