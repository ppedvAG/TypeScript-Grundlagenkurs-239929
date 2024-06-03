// npm i -D @types/node
// "tsc && node ./dist/labs/M003-Lab-Mini-Lotto.js 45 7 16 27 9"

namespace Lab003_B {
    const win = [3, 16, 45, 37, 49, 42];

    const args = process.argv.slice(2); // Ignore the first two elements
    if (!args.length || args.length > win.length) {
        console.warn(`You have to provide 1 to 6 numbers as arguments`);
        process.exit(1);
    }

    const input = args.map(Number);

    let matches = 0;
    for (const tip of input) {
        if (win.indexOf(tip) > -1) {
            matches++;
        }
    }

    console.log(`Inputs: ${input}`);
    if (matches) {
        console.log(`Congrats! ${matches} of 6 correct guesses.`);
    } else {
        console.log('Sorry. No correct guesses.');
    }
}
