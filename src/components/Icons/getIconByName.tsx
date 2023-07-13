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
    case 'C#' || 'c#' || 'CSharp' || 'csharp' || 'cSharp':
      return <CSharp />
    case 'Java' || 'java':
      return <Java />
    case 'Javascript' || 'javascript' || 'js' || 'JS' || 'Js':
      return <Javascript />
    case 'Python' || 'python':
      return <Python />
    case 'Ruby' || 'ruby':
      return <Ruby />
    case 'Typescript' || 'typescript' || 'ts' || 'TS':
      return <Typescript />
    case 'Seo' || 'seo' || 'SEO':
      return <Seo />
    default:
      return <DefaultIcon />
  }
}
