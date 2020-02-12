function printMatrix(matrix) {
    // write code here
    if (matrix == null || matrix.length == 0) {
        return [];
    }
    var rows = matrix.length;
    var cols = matrix[0].length;
    var start = 0;
    var result = [];

    while (cols > start * 2 && rows > start * 2) {
        var endX = cols - 1 - start;
        var endY = rows - 1 - start;

        //从左到右打印一行
        for (var i = start; i <= endX; i++) {
            result.push(matrix[start][i]);
        }
        //从上到下打印一行
        if (start < endY) {
            for (var i = start + 1; i <= endY; i++) {
                result.push(matrix[i][endX]);
            }
        }
        //从右到左打印一行
        if (start < endX && start < endY) {
            for (var i = endX - 1; i >= start; i--) {
                result.push(matrix[endY][i]);
            }
        }
        //从下到上打印一行
        if (start < endX && start < endY - 1) {
            for (var i = endY - 1; i >= start + 1; i--) {
                result.push(matrix[i][start]);
            }
        }
        start++;
    }
    return result;
}


function printMatrix_2(matrix) {
    var rows = matrix.length;
    var cols = matrix[0].length;
    var result = [];

    if (rows == 0 || cols == 0) return result;
    var top = 0, left = 0, right = cols - 1, bottom = rows - 1;
    while (top <= bottom && left <= right) {
        //left to right
        for (let i = left; i <= right; ++i) result.push(matrix[top][i]);
        //top tp bottom
        for (let i = top + 1; i <= bottom; ++i) result.push(matrix[i][right]);
        //right to left
        for (let i = right - 1; i >= left && top < bottom; --i) result.push(matrix[bottom][i]);
        //bottom to top
        for (let i = bottom - 1; i > top && right > left; --i) result.push(matrix[i][left]);
        ++top; ++left; --right; --bottom;
    }
    return result;
}

var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log(printMatrix(matrix));