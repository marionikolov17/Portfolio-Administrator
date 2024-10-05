export const timeConverter = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;

    const minutes = Math.floor(seconds / 60);
    const leftSeconds = seconds % 60;

    return `${minutes}m ${leftSeconds > 9 ? leftSeconds : `0${leftSeconds}`}s`
}