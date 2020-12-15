import { CategoryId } from './Category'
import { Locale, Platform } from '../lib/data'

type StringForLocale = { [locale in Locale]: string }

export type Appli = {
  categoryId: CategoryId
  name: StringForLocale
  url: { [platform in Platform]: StringForLocale }
  image: string
}
