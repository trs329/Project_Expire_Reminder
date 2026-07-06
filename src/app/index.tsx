import { FlatList, Text, View } from 'react-native';
import { food_group_card_style, title_style } from '../app/styles.tsx';

type FoodGroup = { id: string; name: string };

const GROUPS: FoodGroup[] = [
  { id: '1', name: 'Fridge' },
  { id: '2', name: 'Pantry' },
  { id: '3', name: 'Freezer' },
];

export default function Index() {
  return (
    <div>
      <View style={title_style.container}>
        <Text>My Kitchen</Text>
      </View>
      <FlatList
        data={GROUPS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={food_group_card_style.container}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </div>
  );
}
