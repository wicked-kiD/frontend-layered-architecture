import React from 'react';
import { AuthPresenterType } from 'presentation/presenters/auth';
import { useInjection } from 'presentation/web/components';
import { withErrorBoundary } from 'presentation/web/hoc';
import { Auth } from 'presentation/web/modules/auth';

function AuthPageComponent(): React.ReactElement {
  const authPresenter = useInjection(AuthPresenterType);

  return <Auth presenter={authPresenter} />;
}

export const AuthPage = withErrorBoundary(AuthPageComponent);
