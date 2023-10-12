const Button = ({text, className, click, children}) => {
    const classes = 'btn btn-' + className;
    return ( 
        <>
            <button className={classes} onClick={click}>
                {text ? text : children}
            </button>
        </>
    );
}

Button.defaultProps = {
    className: "real",
    click: () => {}
};

 
export default Button;