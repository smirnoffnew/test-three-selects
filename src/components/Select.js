import React, { useEffect, useCallback, useContext } from 'react'
import { containerContext } from '../contexts/containerContext'
import { get } from '../actions/containerActions'
import { setURL } from '../utils'
import './Select.css'

const Select = ({ data, ACTIONS, url, placeholder }) => {
  const { dispatch, state } = useContext(containerContext)

  const fetchData = useCallback(() => {
    if (!data.items) {
      dispatch({
        type: ACTIONS.REQUESTED,
      })
      get(url).then(({ data }) => {
        dispatch({
          type: ACTIONS.SUCCEED,
          payload: data
        })
      }).catch(() => {
        dispatch({
          type: ACTIONS.FAILED,
          payload: `${data.name} fetch error`
        })
      })
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return <div className='select-list'>
    <select
      disabled={data.requested}
      name={data.name}
      onChange={({ target: { value } }) => {
        setURL({
          name: data.name,
          slug: JSON.parse(value).slug,
          state,
        })
        dispatch({
          type: ACTIONS.SELECT,
          payload: JSON.parse(value)
        })
      }}
      value={JSON.stringify(data.selected)}
    >
      {
        !data.selected && <option>{placeholder}</option>
      }
      {
        (data.items || []).map(item => (
          <option
            key={item?.id}
            value={JSON.stringify(item)}
          >
            {item?.label}
          </option>
        ))
      }
    </select>
    {data.requested && <div className="loader" />}
    {data.failed && data.failed}
  </div>

}

export default Select
