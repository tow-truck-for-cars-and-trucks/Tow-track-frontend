import React from 'react';
import './not-found.scss';
import { useNavigate } from 'react-router-dom';
import wheelImg from '../../shared/ui/icons/wheel.png';
import Button from '../../shared/ui/button/button';

function NotFound() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/', { replace: true });
  };

  return (
    <section className="not-found">
      <div className="not-found__error">
        <h2 className="not-found__number">4</h2>
        <img
          src={wheelImg}
          alt="Колесо на диске"
          className="not-found__wheel"
        />
        <h2 className="not-found__number">4</h2>
      </div>
      <p className="not-found__caption">Страница не найдена</p>
      <p className="not-found__post-caption">
        Но мы найдем для вас эвакуатор, если вы вернетесь на главную
      </p>
      <div className="not-found__button-container">
        <Button
          label="Эвакуироваться на главную"
          onClick={handleNavigate}
          primary
        />
      </div>
    </section>
  );
}

export default NotFound;
