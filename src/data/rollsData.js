export const categories = [
  { id: "all", name: "All Rolls", icon: "" },
  { id: "veg", name: " Kalijei Roll", icon: "" },
  { id: "egg", name: "Egg Rolls", icon: "" },
  { id: "chicken", name: "Chicken Rolls", icon: "" },
  { id: "cheese", name: "Double Egg Roll", icon: "" },
  { id: "combo", name: "Chicken Lollipop", icon: "" },
];

export const rollsData = [
  // Kalijei Roll (names repeated)
  {
    id: 1,
    name: "Kalijei Rolll",
    category: "veg",
    price: 40,
    description: "Spiced cottage cheese cubes wrapped in soft paratha with tangy chutney",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
    isVeg: true,
  },
  

  // Egg
  {
    id: 6,
    name: "Egg Roll",
    category: "egg",
    price: 40,
    description: "Fluffy scrambled eggs with onions and green chillies",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop",
    isVeg: false,
  },
  

  // Chicken
  
  {
    id: 11,
    name: "Chicken Rolls",
    category: "chicken",
    price: 40,
    description: "Hot and spicy chicken with jalapeños and special sauce",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
    isVeg: false,
  },
  
  // Cheese
 
  {
    id: 16,
    name: "Double Egg Roll",
    category: "cheese",
    price: 40,
    description: "double egg with extra cheese goodness",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
    isVeg: true,
  },
  

  // Combo
  
  {
    id: 19,
    name: "Chicken Lollipop",
    category: "combo",
    price: 150,
    description: "premium rolls",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=300&fit=crop",
    isVeg: false,
  },
  
];
