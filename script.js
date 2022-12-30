function apartmentHunting(blocks, reqs) {
    let minMaxDistance = Number.POSITIVE_INFINITY;
    let optimalBlock = -1;

    for (let i = 0; i < blocks.length; i++) {
        let maxDistance = 0;
        for (let req of reqs) {
            let distance = Number.POSITIVE_INFINITY;
            if (!blocks[i][req]) {
                for (let j = i - 1; j >= 0; j--) {
                    let otherBlock = blocks[j];
                    if (otherBlock[req]) {
                        distance = Math.min(distance, i - j);
                        break;
                    }
                }
                for (let j = i + 1; j < blocks.length; j++) {
                    let otherBlock = blocks[j];
                    if (otherBlock[req]) {
                        distance = Math.min(distance, j - i);
                        break;
                    }
                }
                maxDistance = Math.max(maxDistance, distance);
            }
        }
        if (maxDistance < minMaxDistance) {
            minMaxDistance = maxDistance;
            optimalBlock = i;
        }
    }

    return optimalBlock;
}
// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;