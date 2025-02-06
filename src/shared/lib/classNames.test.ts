import { classNames } from './classNames'

describe('classNames', () => {
  test('Returns only className if mods and additional are not provided', () => {
    expect(classNames('base-class')).toBe('base-class')
  })

  test('Ignores mods with false and undefined values', () => {
    expect(classNames('base-class', { active: true, disabled: false, hidden: undefined }))
      .toBe('base-class active')
  })

  test('Adds strings from mods if their values are true or non-empty strings', () => {
    expect(classNames('base-class', { active: true, theme: 'dark' }))
      .toBe('base-class active theme')
  })

  test('Adds elements from additional if an array is provided', () => {
    expect(classNames('base-class', {}, ['extra', 'another']))
      .toBe('base-class extra another')
  })

  test('Correctly combines mods and additional', () => {
    expect(classNames('base-class', { active: true }, ['extra']))
      .toBe('base-class active extra')
  })

  test('Works correctly with empty values', () => {
    expect(classNames('base-class', {}, []))
      .toBe('base-class')
  })

  test('Filters out falsy values in mods', () => {
    expect(classNames('base-class', { active: false, visible: 0, theme: '' }))
      .toBe('base-class')
  })
})
