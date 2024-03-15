import React from 'react';

const ButtonGroupContext = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      {children}
    </div>
  );
};

export default ButtonGroupContext;
