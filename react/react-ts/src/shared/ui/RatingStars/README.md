# Rating Stars

###### A simple star rating component for React project

![react-stars](https://i.imgur.com/4b2tx0s.png)

### Get started quickly

In your project include the component:

```javascript
import {RatingStars} from "@/shared/ui/RatingStars/RatingStars"
import React from "react";
import { render } from "react-dom";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

render(
    <RatingStars
        starsCount={6} 
        onChange={ratingChanged}
    />,

  document.getElementById("where-to-render")
);
```

### API

This a list of props that you can pass down to the component:

| Property               | Description                                                                                                                               | Default value | type     |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| `starsCount`                | How many total stars you want                                                                                                             | 5             | number   |
| `onChange(new_rating)` | Will be invoked any time the rating is changed                                                                                            | `null`        | function |