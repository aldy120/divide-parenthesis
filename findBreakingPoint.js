function findBreakingPoint(S) {
  var leftParens = count(S, '(')
  var rightParens = count(S, ')')
  // ( -> left++, 
  // ) -> right--
  // stop when left === right
  var currentLeft = 0
  var currentRight = rightParens
  for (var i = 0; i <= S.length; i++) {
    if (currentLeft === currentRight) {
      return i
    }
    if (S[i] === '(') {
      currentLeft++
    }
    if (S[i] === ')') {
      currentRight--
    }
  }
}

function count(S, char) {
  var total = 0
  for (var i = 0; i < S.length; i++) {
    if (S[i] === char) {
      total++
    }
  }
  return total
}

module.exports = findBreakingPoint