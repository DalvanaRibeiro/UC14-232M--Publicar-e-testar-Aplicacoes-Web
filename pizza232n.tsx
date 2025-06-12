import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { Link } from 'expo-router';
import type { RelativePathString } from 'expo-router'; // IMPORTANTE para corrigir o erro de tipos

interface Restaurant {
  name: string;
  category: string;
  rating: number;
  image: string;
  distance: string;
}

// Dados de exemplo
const restaurants: Restaurant[] = [
  {
    name: 'hamburguer 1',
    category: 'Pizzaria',
    rating: 4.5,
    image: 'https://i.pinimg.com/736x/e7/f9/4e/e7f94e4c4cb21215e25c9cb383d393a2.jpg',
    distance: '2 km',
  },
  {
    name: 'hamburguer 2',
    category: 'Japonesa',
    rating: 4.7,
    image: 'https://www.example.com/sushitime.jpg',
    distance: '1.5 km',
  },
  {
    name: 'Burger King',
    category: 'Hamburgueria',
    rating: 4.3,
    image: 'https://logodownload.org/wp-content/uploads/2015/02/burger-king-logo-0.png',
    distance: '3 km',
  },
  {
    name: 'Chinxifuo',
    category: 'Chinesa',
    rating: 4.3,
    image: 'https://www.example.com/burgerking.jpg',
    distance: '5 km',
  },
  {
    name: 'Pizza senac',
    category: 'Pizzaria',
    rating: 4.4,
    image: 'https://www.example.com/pizzasenac.jpg',
    distance: '2.2 km',
  },
  {
    name: 'Temaki da array',
    category: 'Japonesa',
    rating: 4.6,
    image: 'https://www.example.com/temakiarray.jpg',
    distance: '1.8 km',
  },
  {
    name: 'Frango Frito da striiing',
    category: 'Fast Food',
    rating: 4.2,
    image: 'https://www.example.com/frangofritostring.jpg',
    distance: '3.1 km',
  },
  {
    name: 'Don Pasta Node',
    category: 'Italiana',
    rating: 4.5,
    image: 'https://www.example.com/donpastaNode.jpg',
    distance: '2.7 km',
  },
  {
    name: 'template string vegetariano',
    category: 'Vegana',
    rating: 4.8,
    image: 'https://www.example.com/templatestringveg.jpg',
    distance: '1.2 km',
  },
  {
    name: 'Taco Real',
    category: 'Mexicana',
    rating: 4.3,
    image: 'https://www.example.com/tacoreal.jpg',
    distance: '4.0 km',
  },
];

// Mapeamento dos links com tipo explícito
const hrefMap: Record<string, RelativePathString> = {
  'hamburguer 1': '/pizza232n',
  'hamburguer 2': '/sushitime',
  'Burger King': '/burgerking',
  'Chinxifuo': '/chinxifuo',
  // Se quiser adicionar mais links para os restaurantes extras, coloque aqui.
};

const Restaurants: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Restaurantes</Text>

      <View style={styles.grid}>
        {restaurants.map((restaurant, index) => {
          const href = hrefMap[restaurant.name]; // href mexido

          const cardContent = (
            <View style={styles.card}>
              <Image source={{ uri: restaurant.image }} style={styles.image} />
              <Text style={styles.cardTitle}>{restaurant.name}</Text>
              <Text style={styles.cardSubtitle}>
                {restaurant.category} • {restaurant.rating}⭐ • {restaurant.distance}
              </Text>
            </View>
          );

          return href ? (
            <Link href={href} asChild key={index}>
              <TouchableOpacity style={styles.cardWrapper}>{cardContent}</TouchableOpacity>
            </Link>
          ) : (
            <TouchableOpacity style={styles.cardWrapper} key={index}>
              {cardContent}
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginVertical: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 15,
    color: '#2c3e50',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '48%',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2c3e50',
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});

export default Restaurants;
