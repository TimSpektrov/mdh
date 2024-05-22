import { FC } from 'react';
import { HorisontalScrollNavigationProps } from '.';
import cn from 'classnames';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useRouter, usePathname } from 'next/navigation';
import style from './HorisontalScrollNavigation.module.scss';

// import data from '@json/data.json';
// const navigation = data?.works?.map((item) => ({
//   id: item.id,
//   name: item.title,
//   slug: item.slug,
//   published: item.published
// }));

export const HorisontalScrollNavigation: FC<HorisontalScrollNavigationProps> = ({ className, variant, position, navigation }) => {
  const route = useRouter();
  const pathName = usePathname();

  return (
    <ScrollContainer
      component={'section'}
      className={cn(
        style.wrap,
        className,
        style[position],
        variant ? style[variant] : style.light
      )}
    >
      <div className={style.track}>
        {navigation?.map((item) => {
          const currentPath = '/works/' + item.slug;
          return (
            <div
              onClick={() => {
                item.published &&
                  currentPath !== pathName &&
                  route.push(item.slug);
              }}
              className={cn(
                style.item,
                currentPath === pathName && style.active,
                item.published && style.link
              )}
              key={item.name}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </ScrollContainer>
  );
};
