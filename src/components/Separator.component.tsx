import { Box } from '@material-ui/core';
import classnames from 'classnames';
import React, { ComponentProps, FC } from 'react';

type Props = ComponentProps<typeof Box>;

const Separator: FC<Props> = ({ component, className, ...rest }) => {
  return <Box {...rest} {...(component ? { component: component } : undefined)} className={classnames('Separator-root', className)} />;
};

export default Separator;
