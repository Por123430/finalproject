import { store } from '../../app/store'
import { usersApiSlice } from '../users/userApiSlice'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import React from 'react'

const Prefetch = () => {
  useEffect(() => {
    console.log('subscribing')
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

    return () => {
        console.log('unsubscribing')
        users.unsubscribe()
    }
  }, [])

  return <Outlet />
}

export default Prefetch