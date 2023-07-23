export class Application {
    public run(): void {
        const helloWorld = (() => console.log('Hello world'))();
    }
}