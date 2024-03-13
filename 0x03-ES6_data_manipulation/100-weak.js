export default function queryAPI(endpoint) {
    const weakMap = new WeakMap();
    let c = weakMap.has(endpoint) ? weakMap.get(endpoint) : 0;
    c += 1;
    weakMap.set(endpoint, c);
    if (c >= 5) throw Error('Endpoint load is high');
    return c;
}
