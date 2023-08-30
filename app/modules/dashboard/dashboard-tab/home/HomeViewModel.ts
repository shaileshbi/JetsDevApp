import { UserResType } from "@app/core/type/UserResType"
import { BASE_URL } from "@app/core/util/constant";
import { useAppDispatch, useAppSelector } from "@app/store";
import { setUserFavorite, setUserUnFavorite, setUsers } from "@app/store/actions/slice.action";
import Axios from "axios-observable"
import { useState } from "react";

const HomeViewModel = () => {
    const [loader, setLoader] = useState(true);
    const [page, setPage] = useState(1);
    const dispatch = useAppDispatch();
    const favoriteUser = useAppSelector(state => state?.favoriteUser)

    const homeUserApi = (result: number, pageSize: number) => {
        setLoader(true)
        Axios.get(`${BASE_URL}${result}&page=${pageSize}`).subscribe({
            next(res) {
                if (res && res?.data && res?.data?.results.length) {
                    if (pageSize === 1) {
                        dispatch(setUsers(res?.data?.results))
                    } else {
                        dispatch(setUsers(favoriteUser?.users?.concat(res?.data?.results?.map((elem: UserResType) => ({ ...elem, status: false })))))
                    }
                }
                setPage(page + 1);
                setLoader(false)
            }, error(err) {
                setPage(1);
                setLoader(false)
            },
        })
    }

    const favClick = (item: UserResType) => {
        if (favoriteUser?.users?.find((elem: UserResType) => elem?.name?.first == item?.name?.first).status) {
            dispatch(setUserUnFavorite(item?.login?.username))
        } else {
            dispatch(setUserFavorite(item?.login?.username))
        }
    }

    return {
        homeUserApi,
        page,
        loader,
        favClick
    }
}

export {
    HomeViewModel
}