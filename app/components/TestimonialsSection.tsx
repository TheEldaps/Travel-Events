import Testimonials from './Testimonials'
import CommentersImage1 from '../../public/CommentersImage1.png'
import CommentersImage2 from '../../public/CommentersImage2.png'
import CommentersImage3 from '../../public/CommentersImage3.png'

export default function TestimonialsSection() {
  return (
    <section>
      <div>
        <h2>Hear from Our <span>Happy Travellers</span></h2>
      </div>

      <div>
        <Testimonials
          image={CommentersImage1}
          comment='I’ve been on six group trips with Travel Made Easy by Nicky, and every single one has been unforgettable. Nicky is kind, thoughtful, and always goes the extra mile to make sure everyone has an amazing experience.'
          name=' C Clark.' />
        <Testimonials
          image={CommentersImage2}
          comment='TME creates the ultimate group vacation experience! Some of the best moments of my life have been on these trips — I wouldn’t trade them for the world. Everyone may not be family by blood, but it truly feels like family. 10/10 — I’ve been on 6+ trips and highly recommend!' name=' S. Dorsey' />
        <Testimonials
          image={CommentersImage3}
          comment='Since we started traveling with Nicky, she has always given us an amazing experience. If you’re looking for excellent customer service and unforgettable adventures, she’s truly one of the best in the business. I would recommend her to anyone! '
          name='S. Rowe' />
      </div>
    </section>
  )
}
