function starOutGrid(grid) {
    const cols = new Set();

    grid.forEach((row) => {
        const index = row.indexOf('*');
        if (index >= 0) {
            // replace all columns with *
            row.forEach((_unused, index) => {
                row[index] = '*';
            });

            cols.add(index);
        }
    });

    // replace all rows with *
    grid.forEach((row) => {
        cols.forEach((col) => {
            row[col] = '*';
        })
    });
    return grid;
}


// or
function starOutGrid2(grid) {
    // Start with empty stars array
    let stars = [];

    // Looping over the arrays
    for (let i = 0; i < grid.length; i++) {
        // Looping over the letters in each array
        for (let j = 0; j < grid[i].length; j++) {
            // If one of the letters is a star
            if (grid[i][j] === '*') {
                stars.push([i, j]);
            }
        }
    }

    // Looping over stars
    for (let i = 0; i < stars.length; i++) {
        // Finding coordinates
        const x = stars[i][0];
        const y = stars[i][1];

        // Looping over arrays and replacing with stars
        for (let j = 0; j < grid.length; j++) {
            for (let k = 0; k < grid[j].length; k++) {
                grid[j][y] = '*';
                grid[x][k] = '*';
            }
        }
    }

    return grid;
}
