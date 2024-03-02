import { SafeAreaView } from "react-native"
import { HelloWordScreen } from "./src/presentation/screens/HelloWordScreen"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"
import { PaperProvider } from "react-native-paper"
import { CounterM3Screen } from "./src/presentation/screens/CounterM3Screen"

import IonIcons from 'react-native-vector-icons/Ionicons'
import { BoxObjectModel } from "./src/presentation/screens/BoxObjectModel"
import { DimensionScreen } from "./src/presentation/screens/DimensionScreen"
import { PositionScreen } from "./src/presentation/screens/PositionScreen"
import { FlexScreen } from "./src/presentation/screens/FlexScreen"
import { FlexDirectionScreen } from "./src/presentation/screens/FlexDirectionScreen"
import { HomeworkScreen } from "./src/presentation/screens/HomeworkScreen"

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcons {...props} />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWordScreen name="Abel Amieva"/> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModel /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen/> */}
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  )
}
