import React, { useContext } from 'react'
import { useFormik } from 'formik'
import lookup from '../services/lyricsLookup'
import { LyricsSearchContext } from './SearchContext'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: Roboto;
`

const SearchField = () => {
  const { searchResults, setSearchResults } = useContext(LyricsSearchContext)
  const cb = res => setSearchResults(JSON.parse(res))

  const formik = useFormik({
    initialValues: {
      keywords: ''
    },
    onSubmit: values => {
      lookup(values.keywords, cb)
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
      <ListContainer>
        <Grid column>
          {searchResults &&
            searchResults.result &&
            searchResults.result.map(res => (
              <Grid item xs={4}>
                {res.song} - {res.artist.toString()}
              </Grid>
            ))}
        </Grid>
      </ListContainer>
    </form>
  )
}

export default SearchField
