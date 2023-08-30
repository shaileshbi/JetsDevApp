import React, { memo } from 'react'
import {FlatList } from 'react-native'
import FavoriteItemCard from '../components/ItemCard'
import { UserResType } from '@app/core/type/UserResType'
import { FavoriteViewModel } from './FavoriteViewModel'
import { useAppSelector } from '@app/store'

/** Favorite Tab Screen */

function Favorite():JSX.Element {
 const {unFavoriteCall} = FavoriteViewModel()
 const favoriteUser = useAppSelector(state=>state.favoriteUser)

  /** render Favorite item card */
  const _renderHomeItem = ({item}:{item:UserResType}):JSX.Element =>(
    <FavoriteItemCard item={item} favClick={()=>unFavoriteCall(item)}/>
  )
    
  return (
    <FlatList
    refreshing={true}
    showsVerticalScrollIndicator={false}
    data={favoriteUser?.users?.filter((elem: any) => elem.status == true)}
    renderItem={_renderHomeItem}
    keyExtractor={(_,index)=>index.toString()}
    />
  )
}

export default memo(Favorite)
