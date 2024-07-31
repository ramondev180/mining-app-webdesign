import {Link as ScrollLink} from 'react-scroll';
import { NavLink } from 'react-router-dom';
function Link(props) {
    const {type,children,scrollTo,linkTo} = props;
    return (
        type === 'scroll' ?
            <ScrollLink href="" activeClass="active" to={scrollTo} spy={true} smooth={true} {...props}>{children}</ScrollLink> :
            <NavLink to={linkTo} {...props}>
                {children}
            </NavLink>
     );
}

export default Link;