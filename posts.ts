/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PostDetail from './pages/PostDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to default language */}
        <Route path="/" element={<LanguageProvider children={<div />} />} />
        
        {/* Language-prefixed routes */}
        <Route path="/:lang" element={<LanguageProvider children={<LayoutOutlet />} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Home />} />
          <Route path="posts/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

function LayoutOutlet() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

import { Outlet } from 'react-router-dom';


