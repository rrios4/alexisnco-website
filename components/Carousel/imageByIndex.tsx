import image1 from '../../public/images/carousel/alexisnco-instapost-15.jpeg'
import image2 from '../../public/images/carousel/alexisnco-instapost-07.jpg'
import image3 from '../../public/images/carousel/alexisnco-instapost-09.jpg'
import image4 from '../../public/images/carousel/alexisnco-instapost-12.jpg'
import image5 from '../../public/images/carousel/alexisnco-instapost-06.jpg'
import image6 from '../../public/images/carousel/alexisnco-instapost-08.jpg'
import image7 from '../../public/images/carousel/alexisnco-instapost-10.jpg'
import image8 from '../../public/images/carousel/alexisnco-instapost-02.jpeg'
import image9 from '../../public/images/carousel/alexisnco-instapost-01.jpeg'

export const images: string[] = [image1, image2, image3, image4, image5, image6, image7, image8, image9]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
