type Mods = Record<string, boolean | string>

export function classNames(className: string, mods?: Mods, additional?: string[]): string {
  return [
    className,
    mods
      ? Object.entries(mods)
          .filter(([_, value]) => Boolean(value))
          .map(([className]) => className)
      : [],
    ...(additional ?? []),
  ].join(' ')
}
