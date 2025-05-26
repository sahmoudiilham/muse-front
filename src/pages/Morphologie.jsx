import React from 'react';
import '../styles/morphologie.scss';

const Morphologie = () => {
  return (
    <div className="morphologie-container">
      <h2>Quelle est votre morphologie ?</h2>
      <div className="morphologie-options">
        <div className="option">
          <img src="/images/morpho-a.png" alt="Morpho A" />
          <p>A (Pyramide)</p>
        </div>
        <div className="option">
          <img src="/images/morpho-h.png" alt="Morpho H" />
          <p>H (Rectangle)</p>
        </div>
        <div className="option">
          <img src="/images/morpho-x.png" alt="Morpho X" />
          <p>X (Sablier)</p>
        </div>
        <div className="option">
          <img src="/images/morpho-o.png" alt="Morpho O" />
          <p>O (Ronde)</p>
        </div>
        <div className="option">
          <img src="/images/morpho-v.png" alt="Morpho V" />
          <p>V (Pyramide inversée)</p>
        </div>
      </div>
    </div>
  );
};

export default Morphologie;
