let pathCache = {};

function tsp_hk(distance_matrix) {
    pathCache = {}
    const n = distance_matrix.length;
    const visited_all = (1 << n) - 1; 
    function tsp(city, mask) {
        if (mask === visited_all) {
            return 0; 
        }

        const cacheKey = `${city},${mask}`;
        if (cacheKey in pathCache) {
            return pathCache[cacheKey];
        }

        let shortest = Infinity;
        for (let next = 0; next < n; next++) {
            if ((mask & (1 << next)) === 0) { 
                const newMask = mask | (1 << next); 
                const dist = distance_matrix[city][next] + tsp(next, newMask);
                shortest = Math.min(shortest, dist);
            }
        }

        pathCache[cacheKey] = shortest;
        return shortest;
    }
    return tsp(0, 1);
}