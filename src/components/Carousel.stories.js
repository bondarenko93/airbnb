import { Carousel } from "./Carousel";
import '../App.css'
import '../index.css'

export default {
    title: 'Carousel',
    component: Carousel,
    argTypes: {
        centeredSlides: {
            options: [true, false],
            control: { type: 'select' },

        },
        slidesPerView: {
            control: { type: 'number', min: 1, max: 7, step: 1 }
        },
        spaceBetween: {
            control: { type: 'number', min: 8, max: 24, step: 2 }
        }
    }
}



const Template = ({ centeredSlides, spaceBetween, slidesPerView, ...rest }) => {

    return <Carousel slidesPerView={slidesPerView} spaceBetween={spaceBetween} centeredSlides={centeredSlides}{...rest} />
}

export const Default = Template.bind({});
Default.args = {
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 18,
}