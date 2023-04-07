# Alg DB

This is an open source cubing algorithm database. It is free for anyone to use and contribute to. The database is currently in its infancy, but we hope to grow it to be a useful resource for anyone who needs to look up an algorithm.

# Contributing

The algorithms are stored in json format so it can easily be used in other projects. 

json schema for an algorithm set:
```json
{
  "name": "string",
  "numAlgs": "number",
}
```

json schema for an algorithm:
```json
{
  "name": "string",
  "algs": ["string"],
}
```