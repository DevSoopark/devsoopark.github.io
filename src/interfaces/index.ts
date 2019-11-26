import { ReplaceComponentRendererArgs } from 'gatsby';

export type ITemplateProps<T> = ReplaceComponentRendererArgs['props'] & {
  pageContext: {
    isCreatedByStatefulCreatePages: boolean;
  } & T;
};

export type IComponentProps = {
  children?: JSX.Element[] | JSX.Element | string | number;
  className?: string;
};

export interface IThemeType {
  font?: string;
  contentBackground?: string;
  background?: string;
  backdrop?: string;
  hover?: string;
  date?: string;
}
