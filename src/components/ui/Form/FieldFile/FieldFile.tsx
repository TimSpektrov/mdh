import { forwardRef, useState, ChangeEvent, useId } from 'react';
import { IFieldFile } from './FieldFile.props';
import styles from './FieldFile.module.scss';

export const FieldFile = forwardRef<HTMLInputElement, IFieldFile>(
  ({ type = 'file', style, ...rest }, ref) => {
    
    const id = useId();
    const [state, setState] = useState({ file: '' });
    const { file } = state
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      e.persist();
      setState(prev => ({
        ...prev, [e.target.name]: e.target.value
      })); 
    };

    return (
      <div ref={ref} className={styles.file} style={style}>
        <input
          id={`${id}_file`}
          name='file'
          className={styles.input}
          type="file"
          accept='.pdf,.docx,.doc'
          onChange={onChange}
          value={file}
          {...rest}
        />
        <label htmlFor={`${id}_file`} className={styles.label}>
          {file ? file.replace(/^C:\\fakepath\\/i, '') : <>Приложить файл <span>(.doc, .pdf)</span></>}
        </label>
      </div>
		)
	}
)

FieldFile.displayName = 'FieldFile'
