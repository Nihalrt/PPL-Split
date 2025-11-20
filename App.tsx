import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PushDay from './pages/PushDay';
import PullDay from './pages/PullDay';
import LegDay from './pages/LegDay';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="push" element={<PushDay />} />
          <Route path="pull" element={<PullDay />} />
          <Route path="legs" element={<LegDay />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;