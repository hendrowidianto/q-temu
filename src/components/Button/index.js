import React from 'react'
import './button.css';

class Button extends React.Component {
    render(){
        const {type, id, className} = this.props

        const ButtonProps = {
            type : type,
            id : id,
            className : className
        }

        // const ButtonStyle = {
        //     style : {
        //         backgroundColor : color
        //     }
        // }

        return (
            <button {...this.props} {...ButtonProps} />
        )
    }
}

export default Button