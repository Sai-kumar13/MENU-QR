export interface FoodItem {
  id: string;
  name: string;
  category: 'veg' | 'non-veg' | 'drinks' | 'desserts' | 'starters' | 'softdrinks' | 'icecreams' | 'snacks' | 'maincourse' | 'juice';
  price: number;
  description: string;
  image_url: string;
  isVeg: boolean;
  isPopular?: boolean;
  spicyLevel?: 0 | 1 | 2 | 3;
  preparationTime?: string;
  calories?: number;
}

export interface Category {
  name: string;
  filterKey: 'all' | 'veg' | 'non-veg' | 'drinks' | 'desserts' | 'starters' | 'softdrinks' | 'icecreams' | 'snacks' | 'maincourse' | 'juice';
  icon: string; // lucide icon name
}

export interface CartItem {
  item: FoodItem;
  quantity: number;
}

export interface RestaurantDetails {
  name: string;
  tagline: string;
  cuisine: string;
  description: string;
  address: string;
  googleMapsUrl: string;
  phone: string;
  whatsappNumber: string; // default prefilled destination
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
}
