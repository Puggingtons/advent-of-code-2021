import * as fs from "fs";

export default abstract class Day {
  constructor(readonly title: string) {
    console.log("Running " + title);
  }

  abstract runPart1(): void;
  abstract runPart2(): void;

  protected readFile(path: string): string[] {
    console.log("reading " + path);
    let read = fs.readFileSync(path, { encoding: "utf-8" }).split("\n");
    console.log("found " + read.length + " lines of data.");

    return read;
  }
}
