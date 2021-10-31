import * as React from 'react'
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'

import './src/styles/reset.css'
import './src/styles/common.css'
import './src/styles/style.css'

import { linkResolver } from './src/utils/LinkResolver'
import HomeTemplate from './src/pages/index'
import PageTemplate from './src/pages/{PrismicPage.url}'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        linkResolver,
        componentResolver: componentResolverFromMap({
          homepage: HomeTemplate,
          page: PageTemplate,
        }),
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
)
