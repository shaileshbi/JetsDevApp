import { images } from '@app/assets/images'
import { UserResType } from '@app/core/type/UserResType'
import dashboardStyle from '@app/style/dashboard-style/dashboardStyle'
import { Avatar, Card } from '@rneui/themed'
import React, { PropsWithChildren, memo } from 'react'
import { View, Text, GestureResponderEvent, TouchableOpacity, Image } from 'react-native'


type HomeItemCard = PropsWithChildren<{
    item: UserResType,
    favClick: (event: GestureResponderEvent) => void
}>
/** This card is showing the user information */
function HomeItemCard({ item, favClick }: HomeItemCard): JSX.Element {
    return (
        <Card key={item?.id?.value?.toString()} containerStyle={[dashboardStyle.cardStyle]}>
            <View style={[dashboardStyle.viewContainerStyle]}>
                {/* profile section */}
                <Avatar rounded size={50} source={{ uri: item?.picture?.medium }} containerStyle={[dashboardStyle.profileIcon]} />

                <View style={{ flex: 1, }}>
                    <View style={[dashboardStyle.viewTextContainer]}>
                        <Text style={[dashboardStyle.textNameStyle]}>
                            {item?.name?.first} {item?.name?.last}
                        </Text>
                        {/* user fav or unfav section */}
                        <TouchableOpacity style={{}} onPress={favClick}>
                            {item?.status ?
                                <Image source={images?.favorite_icon} style={[dashboardStyle.favIconStyle]} />
                                :
                                <Image source={images?.un_favorite_icon} style={[dashboardStyle.favIconStyle]} />
                            }
                        </TouchableOpacity>
                    </View>
                    {/* user loction section text */}
                    <View style={[dashboardStyle.imageViewContainer]}>
                        <Image
                            source={images?.location}
                            resizeMode="contain"
                        />
                        <Text style={[dashboardStyle.locationStyle]}>
                            {item?.location?.country} {item?.location?.state}
                        </Text>
                    </View>
                </View>
            </View>
        </Card>
    )
}

export default memo(HomeItemCard)
