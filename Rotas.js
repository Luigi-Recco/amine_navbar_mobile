import{createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import{MaterialCommunityIcons} from "@expo/vector-icons";

import Berserk from "./Berserk";
import Onepiece from "./Onepiece";
import Home from "./Home";


const Tab = createBottomTabNavigator();

export default function Rotastab()
{
  return(
    
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShow:false}}>

            <Tab.Screen name="Berserk" component={Berserk}options={{
              tabBarIcon:({color,size})=><MaterialCommunityIcons name="" color={color} size={size}/>
            }}/>
            
            <Tab.Screen name="Home" component={Home}/>

             <Tab.Screen name="Onepiece" component={Onepiece}/>

    </Tab.Navigator>
  
  );
}