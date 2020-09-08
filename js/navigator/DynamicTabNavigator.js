/**
 * @description 动态配置 tab 数量
 */
import React, {useState} from 'react';
import FavoritePage from '../page/FavoritePage';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import MyPage from '../page/MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {connect} from 'react-redux';
const TABS = {
  // 在这配置页面的路由
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, docused}) => (
        <MaterialIcons name={'whatshot'} size={26} style={{color: tintColor}} />
      ),
    },
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, docused}) => (
        <Ionicons
          name={'md-trending-up'}
          size={26}
          style={{color: tintColor}}
        />
      ),
    },
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, docused}) => (
        <MaterialIcons name={'favorite'} size={26} style={{color: tintColor}} />
      ),
    },
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, docused}) => (
        <Entypo name={'user'} size={26} style={{color: tintColor}} />
      ),
    },
  },
};
// 引用 redux 之后，根据 redux 数据，动态重写 tabbar
class DynamicTabNavigator extends React.Component {
  constructor(props) {
    super(props)
    // 取消调试时的黄色警告
    console.disableYellowBox = true;
  }
  render() {
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
    // 这里可以动态增删 tabbar 的数量
    const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
    const theme = this.props.theme; // 拿到这层的 theme color
    // 动态 tab 重写属性
    PopularPage.navigationOptions.tabBarLabel = '最热1';
    Tab = createAppContainer(
      createBottomTabNavigator(tabs, {
        tabBarComponent: props => {
          return <BottomTabBar {...props} activeTintColor={theme} />;
        },
      }),
    );
    return <Tab />;
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DynamicTabNavigator);

// 没引用 redux 之前
// 动态更改主题
// const tabBarComponent = (props) => {
//   const [theme, setTheme] = useState({
//     tintColor: props.activeTintColor,
//     updateTime: new Date().getTime()
//   })
//   const {routes, index} = props.navigation.state
//   if (routes[index].params) {
//     const currentTheme = routes[index].params.theme
//     // 以最新的更新时间为主，防止被其他 tab 之前的修改覆盖
//     if (currentTheme && currentTheme.updateTime > theme.updateTime) {
//       setTheme(currentTheme)
//     }
//   }
//   return (
//     <BottomTabBar
//       {...props}
//       activeTintColor={theme.tintColor || props.activeTintColor}
//     />
//   )
// }

// 动态配置 tab 路由导航
// export default () => {
//   const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
//   const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
//   // 动态 tab 属性
//   PopularPage.navigationOptions.tabBarLabel = '最热1';
//   const Tab = createAppContainer(createBottomTabNavigator(tabs, {
//     // 动态修改 tab 颜色
//     tabBarComponent
//   }))
//   return <Tab />;
// };
