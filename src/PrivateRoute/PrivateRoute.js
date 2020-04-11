import React from 'react';
import Context from '../Contexts/Context';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component, ...props }) {
  const Component = component;
  return (
    <Context.Consumer>
      {value => (
        <Route
          {...props}
          render={componentProps =>
            value.authToken ? (
              <Component {...componentProps} />
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: componentProps.location }
                }}
              />
            )
          }
        />
      )}
    </Context.Consumer>
  );
}
