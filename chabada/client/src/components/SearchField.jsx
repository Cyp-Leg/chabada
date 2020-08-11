import React from 'react'
import { useFormik } from 'formik'
import lookup from '../services/lyricsLookup'

const SearchField = () => {
  const formik = useFormik({
    initialValues: {
      keywords: ''
    },
    onSubmit: values => {
      lookup(values.keywords)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='keywords'>Entrez un ou des mot(s) clé(s)</label>
      <input
        id='keywords'
        name='keywords'
        type='keywords'
        onChange={formik.handleChange}
        value={formik.values.keywords}
      />
      <button type='submit'>Rechercher</button>
    </form>
  )
}

export default SearchField
