import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// Selo "Novo"
const Badge: React.FC = () => {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>Novo</Text>
    </View>
  );
};

// Cartão do Produto
const CartaoProduto: React.FC = () => {
  return (
    <View style={styles.card}>
      <Badge />
      <Text style={styles.titulo}>Camiseta Estilosa</Text>
      <Text style={styles.descricao}>Camiseta 100% algodão, super confortável.</Text>
      <Text style={styles.preco}>R$ 49,90</Text>
    </View>
  );
};

// Tipo da função de clique
type BotaoProps = {
  aoClicar: () => void;
};

// Botão de Compra
const BotaoComprar: React.FC<BotaoProps> = ({ aoClicar }) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={aoClicar}>
      <Text style={styles.textoBotao}>Comprar</Text>
    </TouchableOpacity>
  );
};

// Tela principal
const App: React.FC = () => {
  const comprar = () => {
    Alert.alert("Compra realizada!");
  };

  return (
    <View style={styles.container}>
      <CartaoProduto />
      <BotaoComprar aoClicar={comprar} />
    </View>
  );
};

export default App;

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f5ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
    position: 'relative',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
  },
  badge: {
    backgroundColor: '#ff4444',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 25,
    width: '90%',
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
