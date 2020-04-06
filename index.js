const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('hello'));

app.listen(port, () => console.log('listening on ' + port));

var deck = [];

app.get('/showdeck', (req, res) => res.send(deck));

app.get('/resetdeck', (req, res) => {
    let suits = ["d", "c", "h", "s"];
    let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

    for (let i = 0; i < 13; i++) {
        for (let j = 0; j < 4; j++) {
            let suit = suits[j];
            let number = numbers[i];

            deck.push(number + suit);
        }
    }

    for (let i = 0; i < 52; i++) {
        let index = Math.floor(Math.random() * 52);
        let temp = deck[index];
        deck[index] = deck[i];
        deck[i] = temp;
    }
    res.send(deck);
});
