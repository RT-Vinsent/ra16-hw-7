import React, { ComponentType } from 'react';

/**
 * Обертка компонента.
 * @template {ComponentType<any>} T
 * @param {T} WrappedComponent - Оборачиваемый компонент.
 * @param {ComponentType<any>} WrapperComponent - Компонент-обертка.
 * @returns {(props: React.ComponentProps<T>) => JSX.Element} - Компонент с оберткой.
 */
const withWrapper = <T extends ComponentType<any>>(
  WrappedComponent: T,
  WrapperComponent: ComponentType<any>
): ((props: React.ComponentProps<T>) => JSX.Element) => {
  /**
   * Возвращает обернутый компонент.
   * @param {React.ComponentProps<T>} props - Свойства компонента.
   * @returns {JSX.Element} - Компонент с оберткой.
   */
  return (props: React.ComponentProps<T>): JSX.Element => (
    <WrapperComponent>
      <WrappedComponent {...props} />
    </WrapperComponent>
  );
};

export default withWrapper;
