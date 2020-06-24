import React, { useContext, useEffect, useCallback } from 'react'
import { containerContext } from '../contexts/containerContext'
import * as ACTIONS from '../actions/constants'
import * as CONSTANS from '../constants'
import Select from './Select'
import { get } from '../actions/containerActions'
import { isEmpty } from '../utils'

const Navbar = () => {
  const { state, dispatch } = useContext(containerContext)

  const fetchData = useCallback(() => {
    dispatch({
      type: ACTIONS.GET_PARSE_LINK_REQUESTED
    })
    const dataURL = document.location.pathname.split('/').slice(1)
    get(CONSTANS.parseURL.concat(`?service_slug=${dataURL[0]}&brand_slug=${dataURL[1]}&style_slug=${dataURL[2]}`)).then(res => {
      dispatch({
        type: ACTIONS.GET_PARSE_LINK_SUCCEED
      })
      if (dataURL[0] && isEmpty(res.service)) {
        document.location = new URL(`${origin}`);
      }
      if (dataURL[1] && isEmpty(res.brand)) {
        document.location = new URL(`${origin}/${state.service.selectedTerm?.slug}`);
      }
      if (dataURL[2] && isEmpty(res.style)) {
        document.location = new URL(`${origin}/${state.service.selectedTerm?.slug}/${state.brand.selectedBrand.slug}`);
      }
      dispatch({
        type: ACTIONS.SELECT_TERM,
        payload: isEmpty(res.service) ? null : res.service
      })
      dispatch({
        type: ACTIONS.SELECT_BRAND,
        payload: isEmpty(res.brand) ? null : res.brand
      })
      dispatch({
        type: ACTIONS.SELECT_STYLE,
        payload: isEmpty(res.style) ? null : res.style
      })
    }).catch(() => {
      dispatch({
        type: ACTIONS.GET_PARSE_LINK_FAILED,
        payload: 'GET_PARSE_LINK_FAILED'
      })
    })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return <div className='navbar'>
    <Select
      data={{
        name: CONSTANS.service,
        requested: state.service.termsRequested,
        selected: state.service.selectedTerm,
        items: state.service.terms,
        failed: state.service.termsFailed,
      }}
      ACTIONS={{
        REQUESTED: ACTIONS.GET_TERMS_REQUESTED,
        SUCCEED: ACTIONS.GET_TERMS_SUCCEED,
        FAILED: ACTIONS.GET_TERMS_FAILED,
        SELECT: ACTIONS.SELECT_TERM,
      }}
      url={CONSTANS.serviceURL}
      placeholder='select term'
    />
    {
      state.service.selectedTerm && <Select
        data={{
          name: CONSTANS.brand,
          requested: state.brand.brandsRequested,
          selected: state.brand.selectedBrand,
          items: state.brand.brands,
          failed: state.brand.brandsFailed,
        }}
        ACTIONS={{
          REQUESTED: ACTIONS.GET_BRANDS_REQUESTED,
          SUCCEED: ACTIONS.GET_BRANDS_SUCCEED,
          FAILED: ACTIONS.GET_BRANDS_FAILED,
          SELECT: ACTIONS.SELECT_BRAND,
        }}
        url={CONSTANS.brandURL}
        placeholder='select brand'
      />
    }
    {
      state.service.selectedTerm && state.brand.selectedBrand && <Select
        data={{
          name: CONSTANS.style,
          requested: state.style.stylesRequested,
          selected: state.style.selectedStyle,
          items: state.style.styles,
          failed: state.style.stylesFailed,
        }}
        ACTIONS={{
          REQUESTED: ACTIONS.GET_STYLES_REQUESTED,
          SUCCEED: ACTIONS.GET_STYLES_SUCCEED,
          FAILED: ACTIONS.GET_STYLES_FAILED,
          SELECT: ACTIONS.SELECT_STYLE,
        }}
        url={CONSTANS.styleURL}
        placeholder='select style'
      />
    }
  </div>
}

export default Navbar
