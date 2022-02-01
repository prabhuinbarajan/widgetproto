import React, { lazy, Suspense } from 'react';

const LazyBhnlegalconsent = lazy(() => import('./Bhnlegalconsent'));

const Bhnlegalconsent = props => (
  <Suspense fallback={null}>
    <LazyBhnlegalconsent {...props} />
  </Suspense>
);

export default Bhnlegalconsent;
