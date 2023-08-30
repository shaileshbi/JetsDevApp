import React, { memo, useEffect } from 'react'
import { FlatList } from 'react-native'
import HomeItemCard from '../components/ItemCard'
import { HomeViewModel } from './HomeViewModel'
import { UserResType } from '@app/core/type/UserResType'
import { BottomListLoaderAtom } from '@app/shared'
import { useAppSelector } from '@app/store'

/** Home Tab Screen */

function Home(): JSX.Element {
  const { homeUserApi, page, loader, favClick } = HomeViewModel()
  const favoriteUser = useAppSelector(state => state?.favoriteUser)


  useEffect(() => {
    homeUserApi(10, 1)
  }, [])

  /** render Home item card */
  const _renderHomeItem = ({ item }: { item: UserResType }):JSX.Element => (
    <HomeItemCard item={item} favClick={() => favClick(item)
    } />
  )

  return (
    <FlatList
      refreshing={false}
      onRefresh={() => homeUserApi(10, 1)}
      showsVerticalScrollIndicator={false}
      data={favoriteUser?.users}
      renderItem={_renderHomeItem}
      keyExtractor={(_, index) => index.toString()}
      onEndReached={() => homeUserApi(10, page)}
      ListFooterComponent={<BottomListLoaderAtom show={loader} />}
    />
  )
}

export default memo(Home)