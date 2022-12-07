import './Reviews.scss';

export const Reviews = () => {
  window.scrollTo({
    top: 0, left: 0, behavior: 'smooth',
  })

  return (
    <div className="Reviews">
      <h1 className="title Reviews__title">Відгуки</h1>

      <div className="Rewiews__list">
      </div>
    </div>
  );
};
