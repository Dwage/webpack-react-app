import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import classes from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
    </div>
  )
}
