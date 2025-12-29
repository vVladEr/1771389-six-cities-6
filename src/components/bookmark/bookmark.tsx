import { AppRoute, AuthorizationStatus, BookmarkPrefix } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/selectors';
import { redirectToRoute } from '../../store/action';
import { updateFavoriteAction } from '../../store/api-actions';

type BookmarkProps = {
  isActive: boolean;
  offerId: string;
  width: number;
  height: number;
  bookmarkType: BookmarkPrefix;
  onBookmarkClick: (offerId: string) => void;
}

export function Bookmark({isActive, offerId, width, height, bookmarkType, onBookmarkClick} : BookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);

  const handleBookmarkClick = () => {
    if (authStatus !== AuthorizationStatus.Auth){
      dispatch(redirectToRoute(AppRoute.Login));
      return;
    }
    dispatch(updateFavoriteAction({offerId: offerId, isFavorite: !isActive}));
    onBookmarkClick(offerId);
  };

  return(
    <button className={`${bookmarkType}__bookmark-button ${isActive ? `${bookmarkType}__bookmark-button--active` : ''} button`}
      type="button"
      onClick={handleBookmarkClick}
    >
      <svg className={`${bookmarkType}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
