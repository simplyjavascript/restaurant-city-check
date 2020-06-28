## 1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I took 6 hrs for the coding part. Writing meaningful testcases took some time as
I was doing Karma / Jasmine testing for some time and had to revert back to Jest/Enzyme for which I had to refer their documentations. Test cases covers integration tests too. So took a day to do that properly and to cover a good amount of code coverage. ( Screenshots attached in the screenshots folder )

I would have liked to bring in Hooks a bit more & tried Sagas instead of thunks, but for a simple app like this, that would have been a bit overkill & would have increased testing time. Since the evaluation was based on Redux/React specifically, I stick to the requirements. I would have loved to try out the application with hooks, use custom hooks and useEffects for the API call, use the useMemo / useCallback to memoize expensive methods and function calls. Also, can use React.Memo to memoize the component, but not on all components/levels though.

## 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

The problems with sharing non-visual logic & the sprinkling of logic across multiple
life cycle hooks was a problem with regular react development. With Hooks, they had an elegant solution to both. It is a shift in the perspective.
So no more componentDidMount/componentDidUpdate.

eg of a custom hook that has a hover functionality:

// useHover.js

import React, { useEffect } from "react";
const useHover = (currentHoverFlag) => {
const [hovering, setHovering] = React.useState(false);
useEffect(() => {
setHovering(currentHoverFlag);
}, [currentHoverFlag]);
return hovering;
};

export default useHover;

//in the component where we need the functionality:

import React, { useState } from "react";
import useHover from "../custom-hooks/useHover";

const Tooltip = (props) => {
const [hover, setHover] = useState(false);
const result = useHover(hover);
const { tooltip, btnClass, handleClick } = props;
return (
<span className="tooltip_wrapper">
{result && <span className="tooltip"> {tooltip} </span>}
<button
onMouseOut={() => setHover(false)}
onMouseOver={() => setHover(true)}
onClick={handleClick} >
<i className={`fa ${btnClass} fa-2x`}></i>
</button>
</span>
);
};

export default Tooltip;

## 3.How would you track down a performance issue in production? Have you ever had to do this?

Different frameworks gives different tools for this.
The first way is to use the Developer tools to check for errors and put debuggers to pinpoint the root causes of issues.
IDEs like VS Code has built in debugging mechanisms.
There are tools to analyze the size of the production build and we can set buffers for the size of the bundle packages and if it exceeds certain quota.

## 4. How would you improve the API that you just used?

It would have been easier to handle minimal data first and then request additional data later. For the API, if the first request only sent back a limited amount of data, say list of 10 cities and top 10 restaurants near me, it would have been a bit more easier & then can use the "Load More " approach to bring in the next set of data, cache them in the store which helps performance improvements.

## 5. Please describe yourself using JSON.

{
"name": "Hari krishnan"
"description" : "Life long learner"
"married" : true,
"kids": 2,
"passion" : ['Javascript','Driving', 'Teaching', 'Learning' ]
}
