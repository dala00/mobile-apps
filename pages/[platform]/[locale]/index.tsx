import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  applis,
  categories,
  Locale,
  locales,
  Platform,
  platforms,
} from '../../../lib/data'
import { CategoryId } from '../../../models/Category'

type Props = {
  platform: Platform
  locale: Locale
}

export default function Apps(props: Props) {
  const router = useRouter()
  const [categoryId, setCategoryId] = useState<CategoryId>('children')
  const selectedApplis = applis.filter(
    (appli) =>
      appli.categoryId === categoryId &&
      appli.url[props.platform][props.locale] !== ''
  )

  return (
    <div className="container">
      <div className="row flex-wrap">
        {selectedApplis.map((appli) => (
          <Link
            href={appli.url[props.platform][props.locale]}
            key={appli.name.en}
          >
            <a className="col-6 col-sm-4 my-3">
              <div className="card">
                <div className="card-body text-center">
                  <img src={`/images/${appli.image}`} width="100%" />
                  <div>{appli.name[props.locale]}</div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
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
