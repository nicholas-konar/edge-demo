# edge-demo

### Create an edge
#### Mutate
`mutation CreateEdge($createEdgeInput: CreateEdgeInput!) {
  createEdge(createEdgeInput: $createEdgeInput) {
    id
    created_at
    updated_at
    capacity
    node1_alias
    node2_alias
    edge_peers
  }
}`
#### Query Variables
`{
    "createEdgeInput": {
        "node1_alias": "satoshi",
        "node2_alias": "nakamoto"
  }
}`

### Get edge by id
`{
  edge(id: "some-uuid") {
    id
    capacity
    node1_alias
    node2_alias
    edge_peers
    created_at
    updated_at
  }
}`