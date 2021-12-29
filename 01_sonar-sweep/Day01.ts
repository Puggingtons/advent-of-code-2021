import Day from "../shared/Day";

export default class Day01 extends Day {

  private data: number[];

  constructor() {
    super("01 - Sonar Sweep");

    this.data = this.readFile("01_sonar-sweep/data.txt").map((entry) =>
      Number.parseInt(entry)
    );
  }

  runPart1(): any {
    let countOfIncrements: number = 0;

    for (let i = 1; i < this.data.length; i++) {
      if (this.data[i - 1] < this.data[i]) {
        countOfIncrements++;
      }
    }

    return countOfIncrements;
  }

  runPart2(): any {
    let countOfIncrementGroups: number = 0;

    let previousSum = this.data[0] + this.data[1] + this.data[2];

    for (let i = 3; i < this.data.length; i++) {
      const currentSum = this.data[i - 2] + this.data[i - 1] + this.data[i];
      
      if (currentSum > previousSum) {
        countOfIncrementGroups++;
      }

      previousSum = currentSum;
    }

    return countOfIncrementGroups;
  }
}
