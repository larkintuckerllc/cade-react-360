import { ReactInstance, Surface } from 'react-360-web';

const SIZE = 300;

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('Welcome', {}),
    r360.getDefaultSurface()
  );

  // LIVE OAK
  const liveOakSurface = new Surface(
    SIZE,
    SIZE,
    Surface.SurfaceShape.Flat,
  );
  liveOakSurface.setAngle(Math.PI / 2.5, 0);
  r360.renderToSurface(
    r360.createRoot('Info', { name: 'Live Oak' }),
    liveOakSurface,
  );

  r360.compositor.setBackground(r360.getAssetURL('woods.jpg'));
}

window.React360 = {init};
