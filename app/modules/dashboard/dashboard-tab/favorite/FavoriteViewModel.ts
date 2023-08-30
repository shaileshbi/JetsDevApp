import { UserResType } from "@app/core/type/UserResType"
import { useAppDispatch } from "@app/store"
import { setUserUnFavorite } from "@app/store/actions/slice.action"


const FavoriteViewModel = () => {
    const dispatch = useAppDispatch()

    const unFavoriteCall = (item: UserResType) => {
        dispatch(setUserUnFavorite(item?.login?.username))
    }

    return {
        unFavoriteCall
    }
}

export {
    FavoriteViewModel,

}