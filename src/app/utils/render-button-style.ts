export function renderButtonStyle(type: string) {
    switch (type) {
        case "primary":
            return "px-8 py-3 text-lg font-semibold rounded";
        case "secondary":
            return "px-8 py-3 text-lg font-semibold border rounded";
        default:
            return "px-8 py-3 text-lg font-semibold rounded";
    }
}
