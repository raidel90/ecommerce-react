import React from "react";

import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

const WithSpinner = WrappendComponent => {
    
    const Spinner = ({isLoading, ...otherProps}) => {

    return (
        isLoading ? 
                     (<SpinnerOverlay><SpinnerContainer/></SpinnerOverlay>) 
                  :
                     (<WrappendComponent {...otherProps}/>)
);

};

return Spinner;

};

export default WithSpinner;
