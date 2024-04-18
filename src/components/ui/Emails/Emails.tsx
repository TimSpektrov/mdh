import { FC } from 'react';
import { EmailsProps } from '.';
import cn from 'classnames'

// import emails from '@json/emails.json'
import style from './Emails.module.scss';

export const Emails: FC<EmailsProps> = ({ className, emails }) => {
  const classes = cn( style.email, className )
  return (
    <div className={classes}>
      {emails?.length > 0 && emails.map(({email, label}, index) => (
        <div key={index} className={style.item}>
          <span className={cn(style.label, 'label')}>{label}</span>
          <a className={cn(style.link, 'link')} href={`mailto:${email}`}>{email}</a>
        </div>
      ))}
    </div>
  );
};
