// Router
import { createStackNavigator } from 'react-navigation';

// Routes
import photoSelector from "./views/photoSelector";
import detectionSelector from "./views/detectionSelector";
import resultsAnalysisFace from "./views/resultsAnalysisFace";
import resultsAnalysisLandscape from "./views/resultsAnalysisLandscape";
import resultsAnalysisText from "./views/resultsAnalysisText";

// Style
const styleOptions = {
    navigationOptions: {
        headerTitleStyle: {
          fontWeight: '400',
          fontSize: 16,
          color: '#2C2F33',
          textTransform: 'uppercase'
        },
    },
    initialRouteName: 'photoSelectorView'
}

export const AppStack = createStackNavigator({
    photoSelectorView: photoSelector,
    detectionSelectorView: detectionSelector,
    resultsAnalysisFaceView: resultsAnalysisFace,
    resultsAnalysisLandscapeView: resultsAnalysisLandscape,
    resultsAnalysisTextView: resultsAnalysisText
}, styleOptions);