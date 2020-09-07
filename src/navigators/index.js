import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';
import HomePage from '../pages/HomePage';
import FlatListDemo from '../pages/FlatListDemo';
import SectionListDemo from '../pages/SectionListDemo';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text, Button, ScrollView, } from 'react-native';
import {createSwitchNavigator, SafeAreaView} from 'react-navigation'
import Login from '../pages/Login'
// DrawerNavigatorItems 代表侧拉栏的 item
import {createDrawerNavigator, DrawerNavigatorItems} from 'react-navigation-drawer' 

// 顶部导航器
const MaterialTopTabNavigator = createMaterialTopTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Text style={{color: focused ? 'red' : 'white'}}>Page1</Text>
        ),
      },
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Text style={{color: focused ? 'red' : 'white'}}>Page2</Text>
        ),
      },
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Text style={{color: focused ? 'red' : 'white'}}>Page3</Text>
        ),
      },
    },
  },
  {
    // 顶部的 tab 样式
    tabBarOptions: {
      // tab 样式
      tabStyle: {
        minWidth: 20, // 最小宽度
      },
      upperCaseLabel: false, // 取消默认大写
      style: {
        backgroundColor: '#879', // 背景颜色
      },
      // 下划线指示器颜色
      indicatorStyle: {
        header: 2,
        backgroundColor: 'red',
      },
      // 标签label样式
      labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
        color: '#ffffff',
      },
    },
  },
);

// 底部 tab 导航器
const BottomTabNavigator = createBottomTabNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Text style={{color: focused ? 'red' : 'gray'}}>首页</Text>
        ), // 也可以返回组件
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons name="ios-home" size={26} style={{color: tintColor}} />
        ),
      },
    },
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: ({tintColor, focused}) => (
          <Text style={{color: focused ? 'red' : 'gray'}}>Page1</Text>
        ), // 也可以返回组件
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons name="ios-home" size={26} style={{color: tintColor}} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'red', // 底部激活状态颜色
    },
  },
);

// 侧拉抽屉导航
const DrawerNavigator = createDrawerNavigator({
  Page4: {
    screen: Page4,
    navigationOptions: {
      drawerLabel: () => (
        <Text>Page4</Text>
      ),
      drawerIcon: ({ tintColor, focused}) => (
        <MaterialIcons
          name="drafts"
          size={24}
          style={{color: tintColor}}
        />
      )
    }
  },
  Page5: {
    screen: Page5,
    navigationOptions: {
      drawerLabel: () => (
        <Text>Page5</Text>
      ),
      drawerIcon: ({ tintColor, focused}) => (
        <MaterialIcons
          name="move-to-inbox"
          size={24}
          style={{color: tintColor}}
        />
      )
    }
  },
}, {
  contentComponent: (props) => ( // 自定义侧拉抽屉
    // 可滚动
    <ScrollView style={{ backgroundColor: '#098', flex: 1}}>
      {/* 安全屏 forceInset顶部自动适配*/}
      <SafeAreaView forceInset={{top: "always"}}>
        <DrawerNavigatorItems {...props}/>
      </SafeAreaView>
    </ScrollView>
  ),
  // 全局侧拉导航item 的配置
  contentOptions: {
    activeTintColor: "#fff"
  }
})

// 堆栈导航器
const AppStackNavigator = createStackNavigator(
  {
    FlatListDemo,
    SectionListDemo,
    MaterialTopTabNavigator: {
      screen: MaterialTopTabNavigator,
      navigationOptions: {
        title: '顶部导航器',
      },
    },
    BottomTabNavigator: {
      screen: BottomTabNavigator,
      navigationOptions: {
        // title: '底部导航栏',
        // header: () => null
        title: '首页',
        headerRight: () => (
          <Button title="右侧按钮" onPress={() => alert('点击成功')} />
        ),
      },
    },
    DrawerNavigator: {
      screen: DrawerNavigator
    },
    Page1: {
      screen: Page1,
      navigationOptions: ({navigation}) => ({
        title: `${
          navigation.state.params && navigation.state.params.name
        }页面名`, // 动态设置导航名
      }),
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        title: 'Page2',
      },
    },
    Page3: {
      screen: Page3,
      navigationOptions: ({navigation}) => {
        const {state, setParams} = navigation;
        const {params} = state;
        return {
          title: params.name ? params.name : 'This is Page3',
          headerRight: () => (
            <Button
              title={params.mode === 'edit' ? '保存' : '编辑'}
              onPress={() => {
                setParams({mode: params.mode === 'edit' ? '' : 'edit'});
              }}
            />
          ),
        };
      },
    },
  },
  {
    initialRouteName: 'BottomTabNavigator',
    defaultNavigationOptions: {
      // 全局配置默认导航属性
      // header: null, // 取消导航栏
      title: 'PIMS', // 页面导航栏 标题
      headerBackTitle: '返回', // 页面导航栏 返回按钮文案，ios 有效
      headerStyle: {
        backgroundColor: '#5cb7f8', // 页面导航栏 背景颜色
      },
      headerTintColor: '#fff', // 页面导航栏 标题颜色
      headerTitleStyle: {
        fontWeight: 'bold', // 页面导航栏 fontWeight
      },
    },
  },
);

// 不可再跳转回来的，一般在首页/欢迎页 -》 首页
// createSwitchNavigator 定义的导航，不能返回
const AuthStack = createStackNavigator({
  Login
})
const SwitchNavigator = createSwitchNavigator({
  Auth: AuthStack,
  App: AppStackNavigator
})
export default SwitchNavigator
