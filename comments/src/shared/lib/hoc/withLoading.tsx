import type { ComponentType } from "react";

interface WithLoadingProps {
  isLoading: boolean;
}

export function withLoading<T extends WithLoadingProps>(
  WrappedComponent: ComponentType<T>,
  Skeleton: ComponentType 
) {
  return (props: T) => {
    if (props.isLoading) {
      return <Skeleton />;
    }

    return <WrappedComponent {...props} />;
  };
}