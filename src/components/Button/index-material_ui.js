import React from 'react'
import Button from '@material-ui/core/Button'

// const ButtonMaterialUI = ({children}) => (
//     <Button variant="contained" color="primary">
//         {children}
//     </Button>
// )

class ButtonMaterialUI extends React.Component {
    render(){
        const {children, color, onClick} = this.props

        return (
            <Button variant="contained" color={color} onClick={onClick}>
                {children}
            </Button>
        )
    }
}


export default ButtonMaterialUI