import { ReactNode, Component, ErrorInfo } from 'react';
import ErrorPage from '../../src/pages/system/ErrorPage/ErrorPage';

type ErrorBoundaryProps = {
  children: ReactNode
};

type ErrorBoundaryState = {
  hasError: boolean
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  };

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    };

    return this.props.children;
  };
};

export default ErrorBoundary;