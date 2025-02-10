export function pauseExecution(duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration));
}