# 99 Bottles of Beer

Build an express application that enables users to count down the number of bottles of beer.

---

## Instructions

1. Fork and Clone this repository
2. Change into the new directory
3. make a new branch 
4. Work through the requirements listed below

---

## Requirements

- On the home page (`get "/"`), users should see on the first time:
  - "99 Bottles of beer on the wall"
  - On another get request that number should go down by 1
- When a number is given in the url (`get "/:number_of_bottles"`), users should see:
  - The number of bottles of beer on the wall (i.e. `98 Bottles of beer on the wall.`)
  - On another get request the beers should start at the number provided
- If there are 0 bottles left users should see:
  - "There are no bottles left on the wall"
