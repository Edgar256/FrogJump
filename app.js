const frogJumps = (X, Y, D) => {
    if (isNaN(X) || isNaN(Y) || isNaN(D)) return null;
    if (X < 0 || Y < 0 || D < 0) return null;
    if (X > Y) return 0;

    let difference = Y - X;
    let hops = Math.ceil(difference / D)
    console.log(hops)
    return hops;    
}
frogJumps(10,'ed',20)

module.exports = frogJumps;