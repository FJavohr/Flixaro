import React from 'react'
import cls from './ContentWrapper.module.scss'
const ContentWrapper = ({children}) => {
  return (
    <div className={cls.contentWrapper}>{children}</div>
  )
}

export default ContentWrapper