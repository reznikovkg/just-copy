# ✨ Star rating

The **Star Rating** Vue component is the perfect way to collect feedback from your users. It offers a sleek and modern design, with intuitive stars that make it easy for users to quickly rate your product or service.

The component is fully customizable, allowing you to choose the **number of stars, the size of the stars, and the color scheme**.

With this component, you can get valuable feedback from your users quickly and easily.

# 👀 Usage

1. Import the component
```vue
import StarRating from 'StarRating.vue'
```

2. Register the component in the parent component
```vue
components: {
    ...
    StarRating
}
```

3. Add the component to the parent template
```vue
<StarRating/>
```

4. Enjoy \
![](.resources/star-rating-usage.gif)

# 🔧 Documentation

| Name               | Description                                   | Type   |
| ------------------ | --------------------------------------------- | ------ |
| starsCount         | Sets max available value of the rating        | Number |
| starSize           | Sets width and height for the star            | String |
| transitionDuration | Sets the smoothness of the animation          | String |
| inactiveColor      | Sets the inactive color for the star          | Stirng |
| activeColor        | Sets the active color for the star            | String |
| cursorStyle        | Sets the cursor style when a star is selected | String |
| changed            | The event is called when the value changes    | Event  |