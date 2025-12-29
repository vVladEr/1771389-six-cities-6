import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoritesAction, logoutAction } from '../../store/api-actions';
import { getAuthStatus, getCurUserEmail, getCurUserImage } from '../../store/user-process/selectors';
import { getFavoriteOffers } from '../../store/favorites-process/selectors';
import { useEffect } from 'react';

export function Header() : JSX.Element{
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthStatus);
  const curUserName = useAppSelector(getCurUserEmail);
  const curUserAvatarPatch = useAppSelector(getCurUserImage);
  const numberOfFavorites = useAppSelector(getFavoriteOffers).length;

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  const handleLogOutClick = () => {
    dispatch(logoutAction());
  };

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                authorizationStatus === AuthorizationStatus.Auth ?
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                          <img className="header__avatar" src={curUserAvatarPatch} alt="user avatar"/>
                        </div>
                        <span className="header__user-name user__name">{curUserName}</span>
                        <span className="header__favorite-count">{numberOfFavorites}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to={AppRoute.Login} onClick={handleLogOutClick}>
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </> :
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.Login}>
                      <span className="header__signout">Sign In</span>
                    </Link>
                  </li>
              }

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
