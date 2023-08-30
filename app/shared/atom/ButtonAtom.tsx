import colors from '@app/theme/colors'
import { Button, ButtonProps } from '@rneui/base'
import React, { memo } from 'react'


interface ButtonAtomProps extends ButtonProps {
    gradient?: 'PRIMARY' | 'SECONDARY' | 'WHITE'
}

function ButtonAtom(props: ButtonAtomProps): JSX.Element {
    return (
        <Button {...props}
            buttonStyle={
                [{
                    backgroundColor: props.gradient === 'PRIMARY' ? colors.primary : props.gradient === 'WHITE' ? colors.white : colors.primary
                }, props.buttonStyle]
            }
            titleProps={{ numberOfLines: 1 }
            } />
    )
}

export default memo(ButtonAtom)