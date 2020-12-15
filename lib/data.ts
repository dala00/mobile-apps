import { Appli } from '../models/Appli'
import { Category } from './../models/Category'

export type Locale = 'en' | 'ja'
export const locales: Locale[] = ['en', 'ja']

export type Platform = 'android' | 'ios'
export const platforms: Platform[] = ['android', 'ios']

export const categories: Category[] = [
  {
    id: 'children',
    name: { en: 'for Children', ja: 'こども' },
  },
  {
    id: 'all',
    name: { en: 'for All', ja: '一般' },
  },
]

export const applis: Appli[] = [
  {
    categoryId: 'children',
    name: {
      en: 'Play with Train',
      ja: 'でんしゃで あそぶ',
    },
    url: {
      android: {
        en:
          'https://play.google.com/store/apps/details?id=com.alphabrend.train',
        ja:
          'https://play.google.com/store/apps/details?id=com.alphabrend.train&hl=ja',
      },
      ios: {
        en: 'https://apps.apple.com/us/app/id1487309376',
        ja: 'https://apps.apple.com/us/app/id1487309376',
      },
    },
    image: 'train.png',
  },
  {
    categoryId: 'children',
    name: {
      en: 'Play and collect Cars',
      ja: 'くるまを あつめてあそぶ',
    },
    url: {
      android: {
        en: 'https://play.google.com/store/apps/details?id=com.alphabrend.car',
        ja:
          'https://play.google.com/store/apps/details?id=com.alphabrend.car&hl=ja',
      },
      ios: {
        en: 'https://apps.apple.com/us/app/id1518932510',
        ja: 'https://apps.apple.com/us/app/id1518932510',
      },
    },
    image: 'car.png',
  },
]
