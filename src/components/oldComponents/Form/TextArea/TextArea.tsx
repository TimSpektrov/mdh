import { forwardRef } from 'react'
import { ITextArea } from './TextArea.props'
import cn from 'classnames'
import styles from './TextArea.module.scss'
import inputStyle from '@/components/ui/Form/Field/Field.module.scss'

export const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
	({style, textError, textLength, ...rest}, ref) => {
		return (
			<div className={styles.editor} style={style}>
        <textarea ref={ref} {...rest} />
        {(textLength || textLength !== 0) &&
          <div className={cn(styles.characterCounter, textLength && textLength > 500 && styles.characterCounterMax)}>
            {textLength && textLength > 500 ? '500/500' : textLength + '/500'}
          </div>} 
        {textError && <div className={inputStyle.error}>{textError}</div>}
			</div>
		)
	}
)

TextArea.displayName = 'TextArea'
