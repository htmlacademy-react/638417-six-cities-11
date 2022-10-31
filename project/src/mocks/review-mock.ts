import { Reviews } from '../types/review';

export const reviews: Reviews = [
  {
    'id': 1,
    'user': {
      'id': 12,
      'isPro': true,
      'name': 'Isaac',
      'avatarUrl': 'https://10.react.pages.academy/static/avatar/3.jpg'
    },
    'rating': 4,
    'comment': 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    'date': '2022-06-13T12:25:36.938Z'
  },
  {
    'id': 2,
    'user': {
      'id': 13,
      'isPro': false,
      'name': 'Pavlo',
      'avatarUrl': 'https://10.react.pages.academy/static/avatar/1.jpg'
    },
    'rating': 2,
    'comment': 'Highly reccomend :) We loved it so much, the house, the veiw, the location just great.. ',
    'date': '2022-06-14T13:24:36.938Z'
  }
];
