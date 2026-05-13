import { COLORS } from '@/modules/core/constants/colors'
import { Tabs } from 'expo-router'
import React from 'react'
import {HugeiconsIcon} from "@hugeicons/react-native"
import {Add01Icon, Home01Icon, UserIcon} from "@hugeicons/core-free-icons"

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
        sceneStyle:{
            backgroundColor:COLORS.background,
          },
          tabBarStyle:{
            backgroundColor:COLORS.background,
            borderTopColor:"transparent",
          },
          tabBarActiveTintColor:COLORS.primary,
        }}
      >
      <Tabs.Screen
      name="posts"
      options={{
          title:"Posts",
          tabBarIcon: ({focused}) => < HugeiconsIcon
          color={focused? COLORS.primary : "#a3a3a3"}
          strokeWidth={2.5}
          icon={Home01Icon}
          size={24}
          />
      }}
      />
      <Tabs.Screen
      name="new-posts"
      options={{
          title:"Nueva Publicación",
          tabBarIcon: ({focused}) => < HugeiconsIcon
          color={focused? COLORS.primary : "#a3a3a3"}
          strokeWidth={2.5}
          icon={Add01Icon}
          size={24}
          />
      }}
      />
       <Tabs.Screen
      name="profile"
      options={{
          title:"Perfil",
          tabBarIcon: ({focused}) => <HugeiconsIcon
          color={focused? COLORS.primary : "#a3a3a3"}
          strokeWidth={2.5}
          icon={UserIcon}
          size={24}
          />
      }}
      />
    </Tabs>
  )
}

export default TabsLayout
