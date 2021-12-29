import Day from "../shared/Day";

export default class Day03 extends Day {
  private data: string[];

  constructor() {
    super("03 - Binary Diagnostic");
    this.data = this.readFile("03_binary-diagnostic/data.txt");
  }

  runPart1() {
    let sumOfPosition = new Array<number>();

    // init each array entry with 0
    for (let i = 0; i < this.data[0].length; i++) {
      sumOfPosition[i] = 0;
    }

    for (let line of this.data) {
      const splitLine = line.split("");

      for (let position = 0; position < splitLine.length; position++) {
        sumOfPosition[position] += Number.parseInt(splitLine[position]);
      }
    }

    console.log(JSON.stringify(sumOfPosition));

    let gamma = "";
    let epsilon = "";

    for (let position of sumOfPosition) {
      if (position > this.data.length / 2) {
        gamma += "1";
        epsilon += "0";
      } else {
        gamma += "0";
        epsilon += "1";
      }
    }

    console.log("  Gamma: " + gamma + " -> " + Number.parseInt(gamma, 2));
    console.log("Epsilon: " + epsilon + " -> " + Number.parseInt(epsilon, 2));

    return Number.parseInt(gamma, 2) * Number.parseInt(epsilon, 2);
  }

  runPart2() {}
}
