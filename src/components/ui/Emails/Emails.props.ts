interface IEmailItem {
  label: string;
  email: string;
}
export interface EmailsProps {
  className?: string;
  emails: IEmailItem[]
}
