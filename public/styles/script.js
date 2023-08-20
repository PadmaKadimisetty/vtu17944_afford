document.addEventListener('DOMContentLoaded', function () {
    const urlForm = document.getElementById('urlForm');
    const resultDiv = document.getElementById('result');

    urlForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const urlsInput = document.getElementById('urls');
        const urls = urlsInput.value.split(',');

        const responses = await Promise.all(urls.map(fetchData));

        const mergedNumbers = processResponses(responses);
        resultDiv.textContent = 'Merged unique integers: ' + mergedNumbers.join(', ');
    });

    async function fetchData(url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.text();
            }
        } catch (error) {
            console.error(error);
        }
        return '';
    }

    function processResponses(responses) {
        const mergedNumbers = new Set();
        responses.forEach(response => {
            const numbers = response.split(/\D+/).map(Number);
            numbers.forEach(number => mergedNumbers.add(number));
        });
        return Array.from(mergedNumbers).sort((a, b) => a - b);
    }
});