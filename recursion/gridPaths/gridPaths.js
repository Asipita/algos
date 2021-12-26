// find the total possible number of ways to move from the top-left corner of a grid to the bottom-right

function gridPaths(rows, columns, memo={}) {
    const key = `${rows},${columns}`
    if(rows === 1 && columns === 1) return 1;
    if(rows === 0 || columns === 0) return 0;
    if(key in memo) return memo[key]

    memo[key] = gridPaths(rows - 1, columns, memo) + gridPaths(rows, columns - 1, memo)
    return memo[key]
}

console.log(gridPaths(30, 30))