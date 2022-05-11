const BASE = 'https://validate-image.herokuapp.com'

const image_urls = [
  BASE + '/bad/image1.jpg',
  BASE + '/good/image2.jpg',
  BASE + '/good/image3.jpg',
  BASE + '/good/image4.jpg',
  BASE + '/bad/image5.jpg',
]

validateImages(image_urls).then(console.log); // [ false, true, true, true, false ]
