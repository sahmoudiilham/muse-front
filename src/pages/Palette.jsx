import React from 'react';
import '../styles/palette.scss';

const Palette = () => {
  return (
    <div className="palette-page">
      <h1 className="palette-title">Palette de Couleurs</h1>
      <p className="palette-description">
        Découvrez la palette qui correspond à votre morphologie et style personnel.
      </p>

      <div className="palette-grid">
        <div className="palette-color color-warm">Warm</div>
        <div className="palette-color color-cool">Cool</div>
        <div className="palette-color color-neutral">Neutral</div>
        <div className="palette-color color-soft">Soft</div>
      </div>
    </div>
  );
};

export default Palette;
