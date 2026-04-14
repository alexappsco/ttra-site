import type { ButtonProps } from '@mui/material/Button';
import type { BreadcrumbsProps } from '@mui/material/Breadcrumbs';

// ----------------------------------------------------------------------

export type BreadcrumbsLinkProps = {
  name?: string;
  href?: string;
  icon?: React.ReactElement;
};

export interface CustomBreadcrumbsProps extends BreadcrumbsProps {
  heading?: string;
  activeLast?: boolean;
  actions?: ButtonProps[];
  links: BreadcrumbsLinkProps[];
}
