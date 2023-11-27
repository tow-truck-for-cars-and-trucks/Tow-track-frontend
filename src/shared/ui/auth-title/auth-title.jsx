import './auth-title.scss';

/**
 * @param {string} subtitle - subtitle of the auth form
 */
function AuthTitle({ subtitle }) {
  return (
    <section>
      <div className="auth-title">
        <h1 className="auth-title__label">Войти</h1>
        <h1 className="auth-title__label"> или зарегистрироваться</h1>
        <p className="auth-title__subtitle">{subtitle}</p>
      </div>
    </section>
  );
}

export default AuthTitle;
