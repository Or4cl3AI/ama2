```javascript
async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/or4cl3ai/Aiden_t5",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

query({ "inputs": "Can you please let us know more details about your " }).then((response) => {
    console.log(JSON.stringify(response));
});

async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/or4cl3ai/SoundSlayerAI",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

query({ "inputs": "The answer to the universe is 42" }).then((response) => {
    console.log(JSON.stringify(response));
});
```