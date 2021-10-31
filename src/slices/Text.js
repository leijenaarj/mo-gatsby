// Text.js file

import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import { CustomLink } from '../utils/CustomLink'

export const Text = ({ slice }) => {
  const columnClass =
    slice.primary.columns === '2 Columns'
      ? 'text-section-2col'
      : 'text-section-1col'

  return (
    <section className={`content-section ${columnClass}`}>
      <RichText
        render={slice.primary.content.richText}
        serializeHyperlink={CustomLink}
      />
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyText on PrismicPageDataBodyText {
    primary {
      columns
      content {
        richText
      }
    }
  }
  fragment HomepageDataBodyText on PrismicHomepageDataBodyText {
    primary {
      columns
      content {
        richText
      }
    }
  }
`
