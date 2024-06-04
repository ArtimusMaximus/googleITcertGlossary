import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { wordsDefs } from './terms.js';

const rl = readline.createInterface({ input, output });

async function main() {
    while (true) {
        let answer = await rl.question('\x1b[1m\x1b[31mPress enter for new definition~\n');
        if (answer.trim().toLowerCase() === "exit") {
            console.log("\x1b[1m%s", "Exiting...");
            setTimeout(() => {
                rl.close();
            }, 1000);
            break;
        } else {
            randomDef(wordsDefs);
        }
    }
}


rl.on('close', () => process.exit(0));
main();

function randomDef(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    
    // console.log("\x1b[33m", `Word: ${arr[randomIndex].word}\n${arr[randomIndex].def}`);
    // console.log("\x1b[33m", arr[randomIndex].word);
    console.log("\x1b[33m%s\n \x1b[32m%s\n", arr[randomIndex].word, arr[randomIndex].def);
    
    
}



