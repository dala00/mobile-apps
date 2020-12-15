import { useRouter } from 'next/router'
import { useState } from 'react'
import { applis, categories, Locale, Platform } from '../../../lib/data'
import { CategoryId } from '../../../models/Category'

type Query = {
  platform: Platform
  locale: Locale
}

export default function Apps() {
  const router = useRouter()
  const query = router.query as Query
  const [categoryId, setCategoryId] = useState<CategoryId>('children')
  const selectedApplis = applis.filter((app) => app.categoryId === categoryId)

  return (
    <div>
      {selectedApplis.map((appli) => (
        <div>{appli.name[query.locale]}</div>
      ))}
    </div>
  )
}
