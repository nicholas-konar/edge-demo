# edge-demo
## Getting started
- In a new terminal, clone the repo and `cd` to the project root
- Run `docker-compose up --build` (to teardown, run `docker-compose down -v`)
- In your browser, head to `http://localhost:3000/graphql` to access the GraphQL playground. (Query/mutation examples below)
- Monitor your terminal to verify logging output


## Create an edge
### Mutate
```GraphQL
mutation CreateEdge($createEdgeInput: CreateEdgeInput!) {
  createEdge(createEdgeInput: $createEdgeInput) {
    id
    created_at
    updated_at
    capacity
    node1_alias
    node2_alias
    edge_peers
  }
}
```
### Query Variables
```JSON
{
    "createEdgeInput": {
        "node1_alias": "satoshi",
        "node2_alias": "nakamoto"
  }
}
```

## Get edge by id
```GraphQL
{
  edge(id: "some-uuid") {
    id
    capacity
    node1_alias
    node2_alias
    edge_peers
    created_at
    updated_at
  }
}
```

## Get all edges
```GraphQL
{
  edges {
    id
    capacity
    node1_alias
    node2_alias
    edge_peers
    created_at
    updated_at
  }
}
```