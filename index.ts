import Day01 from './01_sonar-sweep/Day01';
import Day02 from './02_dive/Day02';
import Day03 from './03_binary-diagnostic/Day03';
import Day from './shared/Day';

let day: Day = new Day03();

let resultPart1 = day.runPart1();
console.log("The result of " + day.title + " - Part 1 is:");
console.log(resultPart1);

console.log("");

let resultPart2 = day.runPart2();
console.log("The result of " + day.title + " - Part 2 is:");
console.log(resultPart2);
