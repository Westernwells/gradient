
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
      indexName="test_GRADIENT"
      searchClient={searchClient}
    >
      <SearchBox />
      <Hits />
    </InstantSearch>
  )
}
const Hiter = styled.div`
   
            font-size: '.85rem';
            font-style: 'italic';
            margin-bottom: '10px';
            max-width: '30rem';
`;

const Container = styled.div`
display: 'flex'; flex-wrap: 'wrap' 
`;