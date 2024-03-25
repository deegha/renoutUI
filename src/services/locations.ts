export const locations = [
  {
    id: 1,
    name: 'Angoda',
    slug: 'angoda',
  },
  {
    id: 2,
    name: 'Athurugiriya',
    slug: 'athurugiriya',
  },
  {
    id: 3,
    name: 'Avissawella',
    slug: 'avissawella',
  },
  {
    id: 4,
    name: 'Battaramulla',
    slug: 'battaramulla',
  },
  {
    id: 5,
    name: 'Boralesgamuwa',
    slug: 'boralesgamuwa',
  },
  {
    id: 6,
    name: 'Colombo 01',
    slug: 'colombo-01',
  },
  {
    id: 7,
    name: 'Colombo 02',
    slug: 'colombo-02',
  },
  {
    id: 8,
    name: 'Colombo 03',
    slug: 'colombo-03',
  },
  {
    id: 9,
    name: 'Colombo 04',
    slug: 'colombo-04',
  },
  {
    id: 10,
    name: 'Colombo 05',
    slug: 'colombo-05',
  },
  {
    id: 11,
    name: 'Colombo 06',
    slug: 'colombo-06',
  },
  {
    id: 12,
    name: 'Colombo 07',
    slug: 'colombo-07',
  },
  {
    id: 13,
    name: 'Colombo 08',
    slug: 'colombo-08',
  },
  {
    id: 14,
    name: 'Colombo 09',
    slug: 'colombo-09',
  },
  {
    id: 15,
    name: 'Colombo 10',
    slug: 'colombo-10',
  },
  {
    id: 16,
    name: 'Colombo 11',
    slug: 'colombo-11',
  },
  {
    id: 17,
    name: 'Colombo 12',
    slug: 'colombo-12',
  },
  {
    id: 18,
    name: 'Colombo 13',
    slug: 'colombo-13',
  },
  {
    id: 19,
    name: 'Colombo 14',
    slug: 'colombo-14',
  },
  {
    id: 20,
    name: 'Colombo 15',
    slug: 'colombo-15',
  },
  {
    id: 21,
    name: 'Dehiwala',
    slug: 'dehiwala',
  },
  {
    id: 22,
    name: 'Hanwella',
    slug: 'hanwella',
  },
  {
    id: 23,
    name: 'Homagama',
    slug: 'homagama',
  },
  {
    id: 24,
    name: 'Kaduwela',
    slug: 'kaduwela',
  },
  {
    id: 25,
    name: 'Kesbewa',
    slug: 'kesbewa',
  },
  {
    id: 26,
    name: 'Kohuwala',
    slug: 'kohuwala',
  },
  {
    id: 27,
    name: 'Kolonnawa',
    slug: 'kolonnawa',
  },
  {
    id: 28,
    name: 'Kosgama',
    slug: 'kosgama',
  },
  {
    id: 29,
    name: 'Kottawa',
    slug: 'kottawa',
  },
  {
    id: 30,
    name: 'Kotte',
    slug: 'kotte',
  },
  {
    id: 31,
    name: 'Maharagama',
    slug: 'maharagama',
  },
  {
    id: 32,
    name: 'Malabe',
    slug: 'malabe',
  },
  {
    id: 33,
    name: 'Mount Lavinia',
    slug: 'mount-lavinia',
  },
  {
    id: 34,
    name: 'Nawala',
    slug: 'nawala',
  },
  {
    id: 35,
    name: 'Nugegoda',
    slug: 'nugegoda',
  },
  {
    id: 36,
    name: 'Paddukka',
    slug: 'paddukka',
  },
  {
    id: 37,
    name: 'Pannipitiya',
    slug: 'pannipitiya',
  },
  {
    id: 38,
    name: 'Piliyandala',
    slug: 'piliyandala',
  },
  {
    id: 39,
    name: 'Rajagiriya',
    slug: 'rajagiriya',
  },
  {
    id: 40,
    name: 'Ranala',
    slug: 'ranala',
  },
  {
    id: 41,
    name: 'Ratmalana',
    slug: 'ratmalana',
  },
  {
    id: 42,
    name: 'Talawathugoda',
    slug: 'talawathugoda',
  },
  {
    id: 43,
    name: 'Wellampitiya',
    slug: 'wellampitiya',
  },
  {
    id: '',
    name: 'All',
    slug: 'all',
  },
];

export const getLocation = (id: number) => {
  return locations.find((location) => location.id === id);
};
