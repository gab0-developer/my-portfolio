import { useState } from 'react'
import './App.css'

import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import Page from './Page/Page';

function App() {


  return (
    <>
    <SnackbarProvider>
      <Page />
    </SnackbarProvider>
    </>
  )
}

export default App
