import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const ActiveLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link style={{ fontSize: match ? '30px' : 'inherit' }} to={to} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
