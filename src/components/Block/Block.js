import blocksData from './blocksData'
import './Block.css'

export default function Block(props) {

    const flexDirection = props.reverse ? 'row-reverse' : 'row'
    const {text, url} = blocksData[props.title]

    const style = {
        'height': props.height,
        'background': props.background,
        'flexDirection': flexDirection
    }

    function handleImgStyle(props) {
        let imgStyle = {
            'padding-top': '2%', 
            'height': '85%',
            'width': '50%',
        }

        if(props.imgHeight) imgStyle.height = props.imgHeight
        if(props.imgWidth) imgStyle.width = props.imgWidth

        return imgStyle
    }

    return (
        <div className='block' style={style}>
            <img className='img-block' alt={props.title} src={url} style={handleImgStyle(props)}/>
            <div className='text-block'>
                <span className='title'>{props.title}</span>
                <span className='text'>{text}</span>
            </div>
        </div>
    )
}