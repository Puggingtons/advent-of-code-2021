import Day from "../shared/Day";

export default class Day02 extends Day {
  private data: string[];

  constructor() {
    super("02 - Dive!");
    this.data = this.readFile("02_dive/data.txt");
  }

  runPart1(): any {
    let depth = 0;
    let horizontalPosition = 0;

    for (let instruction of this.data) {
      const [direction, amount] = instruction.split(" ");
      const parsedAmount = Number.parseInt(amount);

      switch (direction) {
        case "forward":
          horizontalPosition += parsedAmount;
          break;
        case "up":
          depth -= parsedAmount;
          break;
        case "down":
          depth += parsedAmount;
          break;
        default:
          console.log("!!! Unknown direction !!!");
          process.exit(-1);
      }
    }

    return depth * horizontalPosition;
  }
  runPart2(): any {
    let depth = 0;
    let horizontalPosition = 0;
    let aim = 0;

    for (let instruction of this.data) {
      const [direction, amount] = instruction.split(" ");
      const parsedAmount = Number.parseInt(amount);

      switch (direction) {
        case "forward":
          horizontalPosition += parsedAmount;
          depth += aim * parsedAmount;
          break;
        case "up":
          aim -= parsedAmount;
          break;
        case "down":
          aim += parsedAmount;
          break;
        default:
          console.log("!!! Unknown direction !!!");
          process.exit(-1);
      }
    }

    return depth * horizontalPosition;
  }
}
