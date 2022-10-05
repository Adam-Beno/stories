import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  color?: string;
  textColor?: string;
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
    flexGrow: 0,
    backgroundColor: 'purple',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
  clicked: {
    opacity: 0.5,
  },
});

export const MyButton = ({ text, onPress, color, textColor }: ButtonProps) => {
  const [toggled, setToggled] = useState(false);

  const handlePress = useCallback(() => {
    setToggled(!toggled);
    onPress();
  }, [onPress, toggled]);

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          !!color && { backgroundColor: color },
          toggled && styles.clicked,
        ]}
        onPress={handlePress}
        activeOpacity={0.8}>
        <Text style={[styles.buttonText, !!textColor && { color: textColor }]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
