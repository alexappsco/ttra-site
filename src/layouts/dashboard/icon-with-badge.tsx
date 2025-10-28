
import NextLink from 'next/link';
import { Icon } from '@iconify/react';
import { Badge, IconButton, Link as MuiLink } from '@mui/material';

interface IconWithBadgeProps {
  icon: string;
  count: number;
  href?: string; // optional route
  onClick?: () => void; // optional click handler
}

const IconWithBadge = ({ icon, count, href, onClick }: IconWithBadgeProps) => {
  const button = (
    <IconButton color="inherit" size="small" onClick={onClick}>
      <Badge badgeContent={count} color="error">
        <Icon icon={icon} width={24} height={24} color="#fff" />
      </Badge>
    </IconButton>
  );

  return href ? (
    <MuiLink component={NextLink} href={href} underline="none" color="inherit">
      {button}
    </MuiLink>
  ) : (
    button
  );
};

export default IconWithBadge;
