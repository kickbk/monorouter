import { vars } from "nativewind";
import { Text, View } from "react-native";

// Loaded from package - works on simulator but breaks on web
import { RootIcon } from "@root/icons";

// Loaded locally - works on simulator and web
// import { RootIcon } from "../../components/RootIcon";

const theme = vars({
  "--theme-fg": "blue",
});

const App = () => {
  return (
    <View className="flex-1 items-center justify-center" style={theme}>
      <Text className="text-[16px] font-bold text-[--theme-fg] transition duration-[2s]">
        Variables
      </Text>
      <Text className="text-base font-bold active:scale-150 active:text-[--theme-fg] transition duration-[500ms]">
        Transitions
      </Text>
      <Text className="text-[14px] font-bold animate-none active:animate-bounce">
        Animations
      </Text>
      <RootIcon />
    </View>
  );
};

export default App;
