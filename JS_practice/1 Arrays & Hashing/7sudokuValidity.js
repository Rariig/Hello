function isValidSudoku(board) {
    const rows = Array(9).fill(0).map(() => new Set()); //sets make it easy to deal with duplicates
    const cols = Array(9).fill(0).map(() => new Set());
    const boxes = Array(9).fill(0).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num === '.') continue;

            // Check for duplicates in rows, columns, and boxes
            if (rows[i].has(num) || cols[j].has(num) || boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(num)) { //boxes logic is interesting
                return false;
            }

            // Add to sets
            rows[i].add(num);
            cols[j].add(num);
            boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(num);
        }
    }
    return true;
}