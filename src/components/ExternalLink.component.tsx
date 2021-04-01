import { Link, makeStyles, Theme } from '@material-ui/core';
import classnames from 'classnames';
import React, { ComponentProps, FC } from 'react';
import { ResponsivenessMultiplier, useResponsivenessMultiplier } from 'src/theme';

type Props = ComponentProps<typeof Link>;

const ExternalLink: FC<Props> = ({ target = '_blank', rel = 'noreferrer', className, children, ...rest }) => {
  const { multiply } = useResponsivenessMultiplier();
  const styles = useStyles({ multiply });

  return (
    <Link {...rest} noWrap target={target} rel={rel} className={classnames(styles['ExternalLink-root'], className)}>
      {children}
    </Link>
  );
};

export default ExternalLink;

type StyleProps = Pick<ResponsivenessMultiplier, 'multiply'>;

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  'ExternalLink-root': ({ multiply }) => ({
    position: 'relative',
    textDecoration: 'none !important',
    cursor: 'pointer',
    color: theme.palette.primary.main,

    '&::after': {
      content: '""',
      position: 'absolute',
      left: '0',
      right: '0',
      bottom: '0',
      width: '100%',
      height: multiply(2),
      transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
      borderBottom: 'none',
      pointerEvents: 'none',
      transform: 'scaleX(1)',
      backgroundColor: theme.palette.primary.main,
    },

    '&:hover::after': {
      transform: 'scaleX(.25)',
    },
  }),
}));
