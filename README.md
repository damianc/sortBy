# `sortBy()`

```
sortBy(fields: string[]): void
```

Sorts an array with objects by given fields.

- to sort in ascending order: pass a field name (optionally, it can start with plus sign `+`)
- to sort in descending order: pass a field name that starts with minus sign `-`

## Example

```
const data = [{
  id: 2, name: 'Adam', city: 'NY'
}, {
  id: 3, name: 'Mark', city: 'LA'
}, {
  id: 1, name: 'John', city: 'NY'
}];

data.sortBy(['city', '-id']);

console.log(
  data
);

/*
[
  {
    "id": 3,
    "name": "Mark",
    "city": "LA"
  },
  {
    "id": 2,
    "name": "Adam",
    "city": "NY"
  },
  {
    "id": 1,
    "name": "John",
    "city": "NY"
  }
]
*/
```
