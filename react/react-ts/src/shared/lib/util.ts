export function shuffle(array: any) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export function cn(c1: string, c2?: string) {
    return c1 + (c2? ` ${c2}` : "")
}

export const create3dMatrix = (m: number, n: number, l: number) => {
    return Array.from({length: m}, () =>
        Array.from({length: n}, () =>
            Array.from({length: l}, () => 0)));
}