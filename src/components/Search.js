
import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  "Q7KZ36G3ZY",
  "ae44fcaea58eb60cf445a726797cbe01"
)
export default function Search() {
  return (
    <InstantSearch
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <SearchBox />
      <Hits />
    </InstantSearch>
  )
}