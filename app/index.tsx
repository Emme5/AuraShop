import React from 'react'
import { Redirect, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, View, ScrollView, Image } from 'react-native'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'

export default function Index() {

const router = useRouter()

  return ( 
  <Redirect href={"/(tabs)/home"} />
    // <SafeAreaView className='bg-gray-900 h-full'>
    //     <ScrollView contentContainerStyle={{ height: '100%' }}>
    //         <View className='w-full flex justify-center items-center h-full px-4'>
    //             <Image
    //             source = {images.logo}
    //             className ='h-[84px]'
    //             resizeMode ='contain'
    //             />

    //             <Image
    //             source = {images.cards}
    //             className ='max-w-[300px] w-full h-[300px]'
    //             resizeMode ='contain'
    //             />
    //             <View className='relative mt-5'>
    //                 <Text className='text-3xl font-bold text-white text-center'>
    //                     Lorem ipsum dolor sit amet {"\n"} getup. <Text className='text-orange-500'>AuraShop.</Text>
    //                 </Text>
    //                     <Image
    //                     source = {images.path}
    //                     className ='w-[120px] h-[25px] absolute -bottom-8 right-0'
    //                     resizeMode ='contain'
    //                 />
    //             </View>
    //             <Text className='text-sm font-light text-gray-200 mt-8 text-center'>
    //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit autem sunt soluta dolor, incidunt optio.
    //             </Text>
    //             <CustomButton
    //                 title="Continue with Email"
    //                 handlePress={() => { 
    //                 router.push('/(auth)/login')
    //                 }}
    //                 containerStyles="w-full mt-7"
    //             />
    //         </View>
    //     </ScrollView>
    // </SafeAreaView>
  
    )
}

