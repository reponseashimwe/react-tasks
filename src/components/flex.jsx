const Flex = ({className, children}) => {
    return ( 
        <div className={`flex ${className}`}>
            {children}
        </div>
    );
}

Flex.defaultProps = {
    className: ''
};
 
export default Flex;