export default function displayIP(ip: string) {
    if (ip.length > 15) {
        return ip.substring(0, 12) + "..."
    }

    return ip;
}