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
    categoryId: 'all',
    name: {
      en: 'Formation Battle',
      ja: 'フォーメーションバトル',
    },
    url: {
      android: {
        en:
          'https://play.google.com/store/apps/details?id=com.alphabrend.formationbattle',
        ja:
          'https://play.google.com/store/apps/details?id=com.alphabrend.formationbattle&hl=ja',
      },
      ios: {
        en: 'https://apps.apple.com/us/app/id1527275998',
        ja: 'https://apps.apple.com/jp/app/id1527275998',
      },
    },
    image: 'formationbattle.png',
  },
  {
    categoryId: 'all',
    name: {
      en: 'Anyone Composer',
      ja: '誰でも作曲家、演奏家',
    },
    url: {
      android: {
        en:
          'https://play.google.com/store/apps/details?id=com.alphabrend.composer',
        ja:
          'https://play.google.com/store/apps/details?id=com.alphabrend.composer&hl=ja',
      },
      ios: {
        en: 'https://apps.apple.com/us/app/anyone-composer/id1512752830',
        ja: 'https://apps.apple.com/jp/app/anyone-composer/id1512752830',
      },
    },
    image: 'anyone_composer.png',
  },
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
        ja: 'https://apps.apple.com/jp/app/id1487309376',
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
        ja: 'https://apps.apple.com/jp/app/id1518932510',
      },
    },
    image: 'car.png',
  },
  {
    categoryId: 'children',
    name: {
      en: 'Play with Airplane',
      ja: 'ひこうきで あそぶ',
    },
    url: {
      android: {
        en:
          'https://play.google.com/store/apps/details?id=com.alphabrend.airplane',
        ja:
          'https://play.google.com/store/apps/details?id=com.alphabrend.airplane&hl=ja',
      },
      ios: {
        en: '',
        ja: '',
      },
    },
    image: 'airplane.png',
  },
  {
    categoryId: 'children',
    name: {
      en: 'Play with Parking',
      ja: 'ちゅうしゃじょうで あそぶ',
    },
    url: {
      android: {
        en:
          'https://play.google.com/store/apps/details?id=com.alphabrend.parking',
        ja:
          'https://play.google.com/store/apps/details?id=com.alphabrend.parking&hl=ja',
      },
      ios: {
        en: '',
        ja: '',
      },
    },
    image: 'parking.png',
  },
  {
    categoryId: 'children',
    name: {
      en: 'Play with Bus',
      ja: 'ばすで あそぶ',
    },
    url: {
      android: {
        en: 'https://play.google.com/store/apps/details?id=com.alphabrend.bus',
        ja:
          'https://play.google.com/store/apps/details?id=com.alphabrend.bus&hl=ja',
      },
      ios: {
        en: '',
        ja: '',
      },
    },
    image: 'bus.png',
  },
  {
    categoryId: 'children',
    name: {
      en: 'Play with Collection',
      ja: 'あつめて あそぶ',
    },
    url: {
      android: {
        en:
          'https://play.google.com/store/apps/details?id=com.alphabrend.collection',
        ja:
          'https://play.google.com/store/apps/details?id=com.alphabrend.collection&hl=ja',
      },
      ios: {
        en: '',
        ja: '',
      },
    },
    image: 'collection.png',
  },
  {
    categoryId: 'children',
    name: {
      en: 'Hanamaru Task',
      ja: 'はなまるスケジュール',
    },
    url: {
      android: {
        en:
          'https://play.google.com/store/apps/details?id=com.alphabrend.hanamaru',
        ja:
          'https://play.google.com/store/apps/details?id=com.alphabrend.hanamaru&hl=ja',
      },
      ios: {
        en: 'https://apps.apple.com/us/app/hanamaru-achievement/id1504011585',
        ja: 'https://apps.apple.com/jp/app/hanamaru-achievement/id1504011585',
      },
    },
    image: 'hanamaru.png',
  },
]
