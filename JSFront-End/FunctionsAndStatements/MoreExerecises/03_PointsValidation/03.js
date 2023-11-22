function pointsValidation(points) {
    function calculteDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    
    const point1 = [points[0], points[1]];
    const point2 = [points[2], points[3]];

    const distance1ToOrigin = calculteDistance(0, 0, point1[0], point1[1]);
    const distance2ToOrigin = calculteDistance(0, 0, point2[0], point2[1]);
    const distanceBetweenPoints = calculteDistance(point1[0], point1[1], point2[0], point2[1]);

    const isDistance1ToOriginValid = Number.isInteger(distance1ToOrigin);
    const isDistance2ToOriginValid = Number.isInteger(distance2ToOrigin);
    const isDistanceBetweenPointsValid = Number.isInteger(distanceBetweenPoints);

    const point1Str = `{${point1[0]}, ${point1[1]}}`;
    const point2Str = `{${point2[0]}, ${point2[1]}}`;

    if (!isDistance1ToOriginValid) {
        console.log(`${point1Str} to {0, 0} is invalid`);
    } else {
        console.log(`${point1Str} to {0, 0} is valid`);
    }

    if (!isDistance2ToOriginValid) {
        console.log(`${point2Str} to {0, 0} is invalid`);
    } else {
        console.log(`${point2Str} to {0, 0} is valid`);
    }

    if (!isDistanceBetweenPointsValid) {
        console.log(`${point1Str} to ${point2Str} is invalid`);
    } else {
        console.log(`${point1Str} to ${point2Str} is valid`);
    }
}
pointsValidation([3, 0, 0, 4])
pointsValidation([2, 1, 1, 1])
