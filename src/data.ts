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

