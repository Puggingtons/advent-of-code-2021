import Day01 from './01_sonar-sweep/Day01';
import Day from './shared/Day';

let day: Day = new Day01();

let resultPart1 = day.runPart1();
let resultPart2 = day.runPart2();

console.log("The result of " + day.title + " - Part 1 is:");
console.log(resultPart1);

console.log("");

console.log("The result of " + day.title + " - Part 2 is:");
console.log(resultPart2);
