import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainAdminPage from './MainAdminPage'

export default function Admin() {
  return (
    <Routes>
        <Route path='/*' element={<MainAdminPage />} />
    </Routes>
  )
}
