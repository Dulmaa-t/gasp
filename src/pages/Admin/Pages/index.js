import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AdminNews from './News'

export default function AdminPages()
{
    return (
        <Routes>
            <Route path='/news/*' element={<AdminNews />} />
        </Routes>
    )
}
