import type { ReactNode, AnchorHTMLAttributes } from 'react'
import { openExternal } from '../lib/native'

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> & {
  href: string
  children: ReactNode
}

/** Anchor that uses the native browser sheet on iOS for http(s) links. */
export function ExternalLink({ href, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      href={href}
      onClick={(event) => {
        if (href.startsWith('http://') || href.startsWith('https://')) {
          event.preventDefault()
          void openExternal(href)
        }
      }}
    >
      {children}
    </a>
  )
}
