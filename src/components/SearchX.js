import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { connectHits, InstantSearch, SearchBox } from 'react-instantsearch-dom'

const searchClient = algoliasearch(
    "Q7KZ36G3ZY",
    "ae44fcaea58eb60cf445a726797cbe01"
  )

// Please note, that to get the `css` prop to work, you'll either
// need to add a jsx pragma or use a babel plugin. Consult the
// Emotion documentation for setting that up for your project.
const Hits = connectHits(({ hits }) => (
  <div>
    {/* Always use a ternary when coercing an array length */}
    {/* otherwise you might print out "0" to your UI */}
    {hits.length ? (
      <>
        {/* I wanted to give a little explanation of the search here */}
        <div
          css={{
            fontFamily: FONTS.catamaran,
            fontSize: '.85rem',
            fontStyle: 'italic',
            maxWidth: '30rem'
          }}
        >
          These are the results of your search. The title and excerpt are
          displayed, though your search may have been found in the content of
          the post as well.
        </div>

        {/* Here is the crux of the component */}
        {hits.map(hit => {
          return (
            <div css={{ marginBottom: bs() }} key={hit.objectID}>
              <Link
                css={{ display: 'block', marginBottom: bs(0.5) }}
                to={hit.slug}
              >
                <h4 css={{ marginBottom: 0 }}>
                  <Highlight attribute="title" hit={hit} tagName="strong" />
                </h4>
                {hit.subtitle ? (
                  <h5 css={{ marginBottom: 0 }}>
                    <Highlight
                      attribute="subtitle"
                      hit={hit}
                      tagName="strong"
                    />
                  </h5>
                ) : null}
              </Link>
              <div>
                <Highlight attribute="excerpt" hit={hit} tagName="strong" />
              </div>
            </div>
          )
        })}
      </>
    ) : (
      <p>There were no results for your query. Please try again.</p>
    )}
  </div>
))

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