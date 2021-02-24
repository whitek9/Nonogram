# Nonogram

Trying to create my own nonogram puzzle from scratch using what I've learned in my Full Stack Web Development course.

What's a nonogram? https://en.wikipedia.org/wiki/Nonogram

Current plan:
1. Figure out how to make buttons with three states (CHECK)
2. Figure out how to populate a grid of buttons based on a height input and a width input
3. Figure out how to capture the grid of buttons, their state, and then use that as solve pattern
4. Create empty grid with matching width/height that will provide "solved" when pattern matches solve pattern from step 4
5. Notarize grid with puzzle key (numbers on columns/rows denoting groups of "checked" buttons)
5.b. Set up puzzle key to react to puzzle state 
    - If puzzle key isn't "possible" with current checked/unchecked stats in that row/column, grey out puzzle key
    - If above is checked and OK, then check if any groups that are checked fit with possible puzzle key and cross out
6. Create "creator mode" for step 3 to make your own puzzles
7. Store completed puzzles by user
8. Allow multiple colours in the puzzle