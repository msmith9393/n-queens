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

  var solution = new Board({n:n});

  var findSolution = function(row) {
    // base case if finished recursing through all rows
    if (row === n) {
      // increment our solutionCount
      return;  
    }

    // iterate over each column in indicated row
    for (var i = 0; i < n; i++) {
      // toggle current piece
      solution.togglePiece(row, i);
      // it there are no conflicts
      if (!solution.hasAnyRooksConflicts()) {
        // search for solutions in next row
        findSolution(row + 1);
        // untoggle piece for next iteration
        // solution.togglePiece(row, i);
      // if there is a conflict immediately
      } else {
        // untoggle the piece
        solution.togglePiece(row, i);
      }
    }
  };

  findSolution(0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such 
// that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var solution = new Board({n:n});


  var findSolutions = function(row) {
    // base case if finished recursing through all rows
    if (row === n) {
      // increment our solutionCount
      solutionCount++;
      return;
    }

    // iterate over each column in indicated row
    for (var i = 0; i < n; i++) {
      // toggle current piece
      solution.togglePiece(row, i);
      // it there are no conflicts
      if (!solution.hasAnyRooksConflicts()) {
        // search for solutions in next row
        findSolutions(row + 1);
        // untoggle piece for next iteration
        solution.togglePiece(row, i);
      // if there is a conflict immediately
      } else {
        // untoggle the piece
        solution.togglePiece(row, i);
      }
    }
  };

  findSolutions(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, 
// with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution;
  var board = new Board({n:n});

  var findSolution = function(row) {

    // iterate over each column in indicated row
    for (var i = 0; i < n; i++) {
      // toggle current piece
      board.togglePiece(row, i);
      // it there are no conflicts
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(row, i);
        continue;
      }
      if (row === n - 1) {
        solution = board.rows();
        return;
      } else {
        findSolution(row + 1);
        if (solution === undefined) {
          board.togglePiece(row, i)
        }
      }
    }
  };

  if (n === 0) {
    return [];
  } else if (n === 1) {
    solution = [[1]];
  } else if (n === 2) {
    solution = [[0, 0], [0, 0]];
  } else if (n === 3) {
    solution = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  } else {
    findSolution(0);
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};
  // var solution = new Board({n:n});

  // var findSolution = function(row) {
  //   // base case if finished recursing through all rows
  //   if (row === n - 1) {
  //     // increment our solutionCount
  //     return;  
  //   }

  //   // iterate over each column in indicated row
  //   for (var i = 0; i < n; i++) {
  //     // toggle current piece
  //     if (i === n-1) {
  //       console.log(solution.rows())
  //     }
  //     solution.togglePiece(row, i);
  //     // it there are no conflicts
  //     if (!solution.hasAnyQueensConflicts()) {
  //       // search for solutions in next row
  //       findSolution(row + 1);
  //       // untoggle piece for next iteration
  //       // solution.togglePiece(row, i);
  //     // if there is a conflict immediately
  //     } else {
  //       // untoggle the piece
        
  //       solution.togglePiece(row, i);
  //       continue;
  //     }
  //   }

  // };
  // if (n === 1) {
  //   return [[1]];
  // }
  // findSolution(0);

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // return solution.rows();

// };

// return the number of nxn chessboards that exist, with n queens placed such 
// that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var solution = new Board({n:n});


  var findSolutions = function(row) {
    // base case if finished recursing through all rows
    if (row === n) {
      // increment our solutionCount
      solutionCount++;
      return;
    }

    // iterate over each column in indicated row
    for (var i = 0; i < n; i++) {
      // toggle current piece
      solution.togglePiece(row, i);
      // it there are no conflicts
      if (!solution.hasAnyQueenConflictsOn(row, i)) {
        // search for solutions in next row
        findSolutions(row + 1);
        // untoggle piece for next iteration
        solution.togglePiece(row, i);
      // if there is a conflict immediately
      } else {
        // untoggle the piece
        solution.togglePiece(row, i);
      }
    }
  };

  findSolutions(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
