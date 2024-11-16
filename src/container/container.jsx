import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className="container px-20 mx-auto">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,  
};

export default Container;
