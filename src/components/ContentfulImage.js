import Image from 'next/image'

const ContentfulImage = ({ src, alt, ...props }) => {
  // Contentful URLs may omit protocol; ensure we have a full URL for Next.js Image
  const imageSrc = src?.startsWith('//') ? `https:${src}` : src
  return <Image src={imageSrc} alt={alt ?? ''} {...props} style={{ width: 'auto', height: 'auto' ,margin: '10px 0' }}/>
}

export default ContentfulImage