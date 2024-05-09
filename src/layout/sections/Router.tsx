import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from './Layout';
import { Main } from './main/Main';
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';
import { About } from './about/About';
import { Contacts } from './contacts/Contacts';
import { NotFound } from './notFound/NotFound';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Main />} />
          <Route path='about' element={<About />} />
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
