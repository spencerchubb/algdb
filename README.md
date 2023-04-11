# Alg DB

This is an open source cubing algorithm database. It is free for anyone to use and contribute to. The database is currently in its infancy, but we hope to grow it to be a useful resource for anyone who needs to look up an algorithm.

- Alg sets: 9
- Cases: 809
- Algs: 1032

View the website [here](https://cubingapp.com/algdb.html)

## [Leave suggestions here](https://github.com/spencerchubb/algdb/issues/new)

You can help in many ways:
- Suggest algorithms
- Suggest new ideas
- Let me know about an issue

## Schema

The algorithms are stored in json format so it can easily be used in other projects. 

json schema for an algorithm set:
```json
{
  "name": "string",
  "cases": "number",
  "puzzle": "string",
}
```

json schema for an algorithm:
```json
{
  "name": "string",
  "algs": ["string"],
}
```
