import cn from "classnames";
import React from "react";

import "./styles.css";

const Input = ({ errorText, className, ...restProps }) => {
  return (
    <div className={cn("cnInputRoot", className)}>
      <input
        className={cn("cnInputItem", errorText && "cnInputWithError")}
        {...restProps}
      />
      <span className="cnInputError">{errorText}</span>
    </div>
  );
};

export default Input;
