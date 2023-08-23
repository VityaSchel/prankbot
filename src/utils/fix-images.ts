export const fixImage = (url: string) => {
  if (url.startsWith('http') && url.includes('cdn-pranks.x5.money')) {
    return url
  } else {
    return 'https://picsum.photos/600/400'
  }
}