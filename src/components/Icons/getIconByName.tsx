import {
  CSharp,
  DefaultIcon,
  Java,
  Javascript,
  Python,
  Ruby,
  Seo,
  Typescript,
} from '@/components/Icons'

export function getIconByName(iconName: string) {
  switch (iconName) {
    case 'C#':
      return <CSharp />
    case 'Java':
      return <Java />
    case 'Javascript':
      return <Javascript />
    case 'Python':
      return <Python />
    case 'Ruby':
      return <Ruby />
    case 'Typescript':
      return <Typescript />
    case 'Seo':
      return <Seo />
    default:
      return <DefaultIcon />
  }
}
