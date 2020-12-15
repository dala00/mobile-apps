import { Locale } from '../lib/data'

export type CategoryId = 'children' | 'all'

export type Category = {
  id: CategoryId
  name: { [locale in Locale]: string }
}
