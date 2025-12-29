import { Link, Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { FormEvent, useEffect, useRef } from 'react';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/selectors';
import { getAllCities, getCurCity } from '../../store/offers-process/selectors';
import { changeCity } from '../../store/offers-process/offers-process';

function LoginPage() : JSX.Element {
  const dispatch = useAppDispatch();
  const allCities = useAppSelector(getAllCities);
  const curCity = useAppSelector(getCurCity);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const authStatus = useAppSelector(getAuthStatus);

  const handleLoginFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      const data : AuthData = {
        login: loginRef.current.value,
        password: passwordRef.current.value
      };
      dispatch(loginAction(data));
    }
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * allCities.length);
    const randomCity = allCities[randomIndex];
    dispatch(changeCity(randomCity));
  }, [dispatch, allCities]);

  if (authStatus === AuthorizationStatus.Auth){
    return <Navigate to={AppRoute.Root} replace/>;
  }

  return(
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" method="post" onSubmit={handleLoginFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required
                  ref={loginRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required
                  ref={passwordRef}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>{curCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
