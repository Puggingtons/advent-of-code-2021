export default abstract class Day {
    constructor(title: string) {
        console.log("Running " + title);
    }

    abstract run(): void;
}