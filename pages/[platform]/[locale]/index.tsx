import Head from 'next/head'
import Link from 'next/link'
import { useState, MouseEvent } from 'react'
import {
  applis,
  categories,
  Locale,
  locales,
  Platform,
  platforms,
} from '../../../lib/data'
import { event } from '../../../lib/gtag'
import { CategoryId } from '../../../models/Category'

type Props = {
  platform: Platform
  locale: Locale
}

export default function Apps(props: Props) {
  const [categoryId, setCategoryId] = useState<CategoryId>('children')
  const selectedApplis = applis.filter(
    (appli) =>
      appli.categoryId === categoryId &&
      appli.url[props.platform][props.locale] !== ''
  )

  function selectTab(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    selectedCategoryId: CategoryId
  ) {
    event.preventDefault()
    setCategoryId(selectedCategoryId)
  }

  function sendEvent(url: string) {
    event('click', props.platform, url)
  }

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <div className="container" style={{ marginBottom: '50px' }}>
        <div className="row flex-wrap">
          {selectedApplis.map((appli) => (
            <Link
              href={appli.url[props.platform][props.locale]}
              key={appli.name.en}
            >
              <a
                className="col-6 col-sm-4 my-3"
                onClick={() =>
                  sendEvent(appli.url[props.platform][props.locale])
                }
              >
                <div className="card">
                  <div className="card-body text-center">
                    <img src={`/images/${appli.image}`} width="100%" />
                    <div className="app-label">{appli.name[props.locale]}</div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <nav className="bottom-navi">
        {categories.map((category) => (
          <a
            href="#"
            key={category.id}
            className={category.id === categoryId ? 'active' : ''}
            onClick={(e) => selectTab(e, category.id)}
          >
            {category.name[props.locale]}
          </a>
        ))}
      </nav>
    </>
  )
}

export async function getStaticPaths() {
  const paths: string[] = []
  platforms.forEach((platform) => {
    locales.forEach((locale) => paths.push(`/${platform}/${locale}`))
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: Props }) {
  return {
    props: {
      platform: params.platform,
      locale: params.locale,
    },
  }
}
