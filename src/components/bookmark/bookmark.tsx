import { AppRoute, AuthorizationStatus } from "../../const"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { getAuthStatus } from "../../store/user-process/selectors"
import { redirectToRoute } from "../../store/action"
import { updateFavoriteAction } from "../../store/api-actions"

type BookmarkProps = {
  isActive: boolean,
  offerId: string
}

export function Bookmark({isActive, offerId} : BookmarkProps): JSX.Element {
  const dispatch = useAppDispatch()
  const authStatus = useAppSelector(getAuthStatus)

  const handleClick = () => {
    if (authStatus !== AuthorizationStatus.Auth){
          dispatch(redirectToRoute(AppRoute.Login))
          return
    }
    dispatch(updateFavoriteAction({offerId: offerId, isFavorite: !isActive}))
  }

  return(
    <button className={`place-card__bookmark-button ${isActive ? 'place-card__bookmark-button--active' : ''} button`}
    type="button"
    onClick={handleClick}>
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
