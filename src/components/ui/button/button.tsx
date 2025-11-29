import style from './button.module.scss';
import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

interface Props {
    children: React.ReactNode;
    buttonDescriptionStyle?: string;
    classname?: string
    slug?: string
}

export const Button: React.FC<Props> = ({ children, classname, slug }) => {
  return (
    <Link href={slug ?? '#'} className={cn(style.button, classname)}>
        {children}
    </Link>
  );
};