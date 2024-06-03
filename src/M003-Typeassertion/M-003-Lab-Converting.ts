// npm i -D @types/node
// "tsc && node ./dist/labs/M001-Lab-Converting.js 4500 01:05:25"

const args = process.argv.slice(2); // Ignore the first two elements

const precision = 100;
const distance = Number(args[0]);
const [hrs, min, sec] = args[1]?.split(':').map(Number);

if (!distance || !hrs || !min || !sec) {
    console.warn(`You have to provide the arguments:
    - distance in meter
    - time 00:00:00`);
    process.exit(1);
}

const totalSecs = sec + (min + hrs * 60) * 60;
const mps = (distance / totalSecs) * precision;

console.log(`Inputs:
\t${distance} m
\t${hrs} hours
\t${min} minutes
\t${sec} seconds
Results:
\t${Math.round(mps) / precision} m/s
\t${Math.round(mps * 3.6) / precision} km/h
\t${Math.round(mps * 3.6 * 0.62137119) / precision} mi/h
`);
