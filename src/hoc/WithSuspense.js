import React, {Suspense} from "react";

const WithSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={'loading'}>
            <Component {...props}/>
        </Suspense>
    }
}

export default WithSuspense;