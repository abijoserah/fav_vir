export interface Recipe {
  id: string;
  name: string;
  imageUrl: string;
}

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Spaghetti Carbonara',
    imageUrl:
      'https://picsum.photos/id/1080/1200/800',
  },
  {
    id: '2',
    name: 'Avocado Toast',
    imageUrl:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '3',
    name: 'Chicken Tikka Masala',
    imageUrl:
      'https://picsum.photos/id/292/1200/800',
  },
  {
    id: '4',
    name: 'Sushi Platter',
    imageUrl:
      'https://picsum.photos/id/1059/1200/800',
  },
  {
    id: '5',
    name: 'Blueberry Pancakes',
    imageUrl:
      'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&w=1200&q=80',
  },
];


export interface Cat {
  id: string;
  name: string;
  breed: string;
  age: number;
  imageUrl: string;
}

export const cats: Cat[] = [
  {
    id: '1',
    name: 'Milo',
    breed: 'Siamese',
    age: 2,
    imageUrl: 'https://www.placecats.com/300/200',
  },
  {
    id: '2',
    name: 'Luna',
    breed: 'Maine Coon',
    age: 4,
    imageUrl: 'https://www.placecats.com/301/200',
  },
  {
    id: '3',
    name: 'Oliver',
    breed: 'British Shorthair',
    age: 3,
    imageUrl: 'https://www.placecats.com/302/200',
  },
  {
    id: '4',
    name: 'Nala',
    breed: 'Bengal',
    age: 1,
    imageUrl: 'https://www.placecats.com/303/200',
  },
  {
    id: '5',
    name: 'Simba',
    breed: 'Ragdoll',
    age: 5,
    imageUrl: 'https://www.placecats.com/304/200',
  },
  {
    id: '6',
    name: 'Bella',
    breed: 'Persian',
    age: 6,
    imageUrl: 'https://www.placecats.com/305/200',
  },
  {
    id: '7',
    name: 'Charlie',
    breed: 'Abyssinian',
    age: 2,
    imageUrl: 'https://www.placecats.com/306/200',
  },
  {
    id: '8',
    name: 'Willow',
    breed: 'Norwegian Forest',
    age: 4,
    imageUrl: 'https://www.placecats.com/307/200',
  },
  {
    id: '9',
    name: 'Shadow',
    breed: 'American Shorthair',
    age: 7,
    imageUrl: 'https://www.placecats.com/308/200',
  },
  {
    id: '10',
    name: 'Pepper',
    breed: 'Scottish Fold',
    age: 3,
    imageUrl: 'https://www.placecats.com/309/200',
  },
  {
    id: '11',
    name: 'Daisy',
    breed: 'Turkish Angora',
    age: 1,
    imageUrl: 'https://www.placecats.com/310/200',
  },
  {
    id: '12',
    name: 'Felix',
    breed: 'Oriental Shorthair',
    age: 8,
    imageUrl: 'https://www.placecats.com/311/200',
  },
];

