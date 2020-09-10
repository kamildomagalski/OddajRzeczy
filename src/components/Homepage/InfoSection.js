import React from 'react';

function InfoSection() {
  return (
    <section className={'info'}>
      <div className={'container'}>
        <div className={'info__box'}>
          <p className={'info__number'}>10</p>
          <p className={'info__title'}>ODDANYCH WORKÓW</p>
          <p className={'info__text'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium itaque quo
            repellat soluta tempora? Distinctio?</p>
        </div>
        <div className={'info__box'}>
          <p className={'info__number'}>5</p>
          <p className={'info__title'}>WSPARTYCH ORGANIZACJI</p>
          <p className={'info__text'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium itaque quo
            repellat soluta tempora? Distinctio?</p>
        </div>
        <div className={'info__box'}>
          <p className={'info__number'}>7</p>
          <p className={'info__title'}>ZORGANIZOWANYCH ZBIÓREK</p>
          <p className={'info__text'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium itaque quo
            repellat soluta tempora? Distinctio?</p>
        </div>
      </div>
    
    </section>
  );
}

export default InfoSection;