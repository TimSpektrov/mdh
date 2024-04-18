import { forwardRef } from 'react'
import { IField } from './Field.props'
import inputStyle from './Field.module.scss'

export const Field = forwardRef<HTMLInputElement, IField>(
	({type = 'text', style, textError, ...rest}, ref) => {
		return (
			<div className={inputStyle.input} style={style}>
        <input ref={ref} type={type} {...rest} />
        {textError && 
          <div className={inputStyle.error}>{textError}</div>
        }
			</div>
		)
	}
)

Field.displayName = 'Field'

// export default Field
