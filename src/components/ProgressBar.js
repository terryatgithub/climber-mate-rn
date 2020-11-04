import React, { useEffect, Component } from "react";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class ProgressBar  extends Component{
    constructor(props) {
        super(props)
        this.circularProgress = null
    }

    componentDidMount() {
        setTimeout(() => {
            this.circularProgress.animate(42, 600); // Will fill the progress bar linearly in 8 seconds
        }, 400)
    }

    render() {
        return (
            <AnimatedCircularProgress
                size={300}
                rotation={270}
                width={25}
                fill={25}
                tintColor="#FF0000"
                backgroundColor="lightgrey"
                lineCap="round"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                ref={(ref) => this.circularProgress = ref}
            />
        )
    }

}