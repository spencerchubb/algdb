# Alg DB

This is an open source cubing algorithm database. It is free for anyone to use and contribute to. The database is currently in its infancy, but we hope to grow it to be a useful resource for anyone who needs to look up an algorithm.

- Alg sets: 16
- Cases: 1292
- Algs: 3340

View the website [here](https://cubingapp.com/algdb.html)

## [Leave suggestions here](https://github.com/spencerchubb/algdb/issues/new)

You can help in many ways:
- Suggest algorithms
- Suggest new ideas
- Let me know about an issue

## Schema

The algorithms are stored in json format so they can easily be used in other projects. 

Typescript types:
```ts
type AlgSetCase = {
    name: string;
    setup?: string;
    algs?: string[];
    variants?: {
        name: string;
        algs: string[];
    }[];
}

type AlgSet = {
    puzzle: string;
    description: string[];
    recommended: string[];
    setup?: string;
    cases: AlgSetCase[];
}
```

## Credits

- The OH CMLL algs come from [this spreadsheet](https://docs.google.com/spreadsheets/d/1WHnksK4yyv63sv3Es-PuKfnFRtZGafqp6rEuEfOx-cg), courtesy of the Roux Method Speedsolvers Discord and Antonio Kam.
- OLLCP, WV, PBL, and 4x4 PLL were sourced from the speedcubedb website.
