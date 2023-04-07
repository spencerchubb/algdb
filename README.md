# Alg DB

This is an open source cubing algorithm database. It is free for anyone to use and contribute to. The database is currently in its infancy, but we hope to grow it to be a useful resource for anyone who needs to look up an algorithm.

View the website [here](https://cubingapp.com/algdb.html)

## [Contribute to the database here](https://github.com/spencerchubb/algdb/issues/new)

If you know how to use github, feel free to submit issues and pull requests.

## Schema

The algorithms are stored in json format so it can easily be used in other projects. 

json schema for an algorithm set:
```json
{
  "name": "string",
  "numAlgs": "number",
  "puzzle": "2x2" | "3x3",
}
```

json schema for an algorithm:
```json
{
  "name": "string",
  "algs": ["string"],
}
```
