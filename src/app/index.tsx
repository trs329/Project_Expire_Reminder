import { FlatList, StyleSheet, Text, View } from 'react-native';

type FoodGroup = { id: string; name: string };

const GROUPS: FoodGroup[] = [
  { id: '1', name: 'Fridge' },
  { id: '2', name: 'Pantry' },
  { id: '3', name: 'Freezer' },
];

export default function Index() {
  return (
    <div>
      <View style={styles.container}>
        <Text>My Kitchen</Text>
      </View>
      <FlatList
        data={GROUPS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
