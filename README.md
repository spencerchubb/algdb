# Alg DB

This is an open-source database for cubing algorithms. It is free for anyone to use and contribute to.

- Alg sets: 20
- Cases: 1868
- Algs: 3949

The algorithm database is maintained by CubingApp. You can view the [algorithm database here](https://cubingapp.com/algdb.html)

## Want to help?

Here are some ways you can help.

### 1. Categorize each algorithm into subsets  
We are in the process of adding subsets to each algorithm, and this is a long-term effort. The goal is to have subsets for each algorithm set so users can easily find algs.

For example, a Dot OLL algorithm would be stored like this:
```
{
  "name": "OLL 1",
  "subsets": ["Dot"],
  "algs": [
    "R U2 R2 F R F' U2 R' F R F'",
    "y R U' R2 D' r U' r' D R2 U R'",
    "R' U' F R' F' R2 U R f' U' f",
    "L' U2 L2 F' L' F U2 L F' L' F"
  ]
},
```

### 2. Add prime when appropriate

One way we can enhance the database is to add primes to any algorithms that need it.

Here's an example showing when it's appropriate to use prime:
```
R U2 R2 U' R2 U' R2 U2 R // Only uses R2
R U2 R2' U' R2 U' R2' U2 R // Uses R2 and R2' when appropriate
```

### 3. Add new algorithms or algorithm sets

### 4. [Leave suggestions here](https://github.com/spencerchubb/algdb/issues/new)

## Credits

- The OH CMLL algs come from [this spreadsheet](https://docs.google.com/spreadsheets/d/1WHnksK4yyv63sv3Es-PuKfnFRtZGafqp6rEuEfOx-cg), courtesy of the Roux Method Speedsolvers Discord and Antonio Kam.
