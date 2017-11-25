# Divide Parenthesis
This is a code golf.

# Description
Given a string S, for each character c in S, c is in the set {'(', ')'}, e.g., S = '())'.

Find a index i < S.length such that the number of left parenthesis in S.slice(0, i) is equal the right parenthesis in S.slice(i).

# Trivial Solution
You can loop for each index i ,and check the left part and the right part by loop and count the number of right/left parentheses.

# Better Solution
Take a look when we go through a parenthesis, if we go through a "(", the number of "(" in left part increase by 1; if we go through a ")", the number of ")" of right part decrease by 1.

We need to only count the number of ")" since we have to decrease it, and finally stop when the number of "(" in the left part is equal to the number of ")" in the right part.

# Pseudo Code
```py
r: the number of ")" in S
l: 0
for each index i in S: 
  return i if r is equal to l
  if S[i] is "(":
    increase l
  if S[i] is ")":
    decrease r
```
# Why the solution exist?
because the relative distance of r and l is finite, and is decrease by 1 each step, it must go down to zero.