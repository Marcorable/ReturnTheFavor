import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

import { colors } from '@/ui/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleStyle: { fontWeight: '700' },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '보답',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="gift-outline"
              color={
                typeof color === 'number'
                  ? colors.textMuted
                  : (color ?? colors.textMuted)
              }
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="people"
        options={{
          title: '사람',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-group-outline"
              color={
                typeof color === 'number'
                  ? colors.textMuted
                  : (color ?? colors.textMuted)
              }
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: '설정',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={
                typeof color === 'number'
                  ? colors.textMuted
                  : (color ?? colors.textMuted)
              }
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
