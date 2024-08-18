declare type FC<P = Record<string, unknown>> = React.FC<
  React.PropsWithChildren<
    P & {
      className?: string;
    }
  >
>;
