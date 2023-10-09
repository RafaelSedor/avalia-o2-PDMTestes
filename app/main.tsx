import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { Stack } from 'expo-router';
import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";
import MenuComponent from '../components/main/Menu';
import { helper } from '../components/main/helper';
import colection from '../services/data';

type Car = {
  id: number;
  brand: string;
  model: string;
  year: number;
};

function main() {
  const data: Car[] = colection;
  const sections = helper(data);

  const carsByBrand: { [brand: string]: Car[] } = {};
  data.forEach((car) => {
    const brand = car.brand;
    if (!carsByBrand[brand]) {
      carsByBrand[brand] = [];
    }
    carsByBrand[brand].push(car);
  });

  const sectionData: { title: string; data: Car[] }[] = Object.keys(carsByBrand).map((brand) => ({
    title: brand,
    data: carsByBrand[brand],
  }));

  return (
    <ActionSheetProvider>
      <View>
        <Stack.Screen
          options={{
            title: 'Soca Rão',
            headerRight: () => <MenuComponent />,
          }}
        />
        <MenuComponent />
        <Text>Carros a Venda</Text>

        <SectionList
          sections={sectionData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{`Brand: ${item.brand}`}</Text>
              <Text>{`Model: ${item.model}`}</Text>
              <Text>{`Year: ${item.year}`}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{title}</Text>
            </View>
          )}
        />
      </View>
    </ActionSheetProvider>
  );
}

const ConnectedMain = connectActionSheet(main);

export default ConnectedMain;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
