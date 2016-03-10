/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard,
// with n rooks placed such that none of them can attack each other






window.findNRooksSolution = function(n) {
  // var solution = []; //fixme

  var solution = new Board({n:n});
  var board = solution.rows();

  // create a function that will take in a row and column index
  var placeRooks = function (row, col) {
    // first thing we need to do is togglepiece and add to count
    solution.togglePiece(row, col);

    if (row === n - 1 && !solution.hasAnyRooksConflicts()) {
      return;
    }
  
    // if there are no conflicts
    if (!solution.hasAnyRooksConflicts()) {
      // try placing a rook in the next row
      placeRooks(row + 1, 0);

    }

    // if there are conflicts
    if (solution.hasAnyRooksConflicts()) {
      // untoggle the piece and try the same row next column
      solution.togglePiece(row, col);
      placeRooks(row, col + 1);
    }
  };

  // for each column in the first row try placing a rook
  placeRooks(0, 0);
  

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};








// return the number of nxn chessboards that exist, with n rooks placed such 
// that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;




  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, 
// with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such 
// that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
