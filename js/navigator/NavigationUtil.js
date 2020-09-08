/**
 * @description 做路由的跳转
 */
const NavigationUtil = (props) => {};
/**
 * 重置到首页
 * @param {object} params
 */
NavigationUtil.resetToHomePage = (props) => {
  const {navigation} = props;
  navigation.navigate('Main');
};
/**
 *
 * @param {any} params 传参
 * @param {string} page 路由名
 */
NavigationUtil.goPage = (params, page) => {
  const navigation = NavigationUtil.navigation;
  if (!navigation) {
    console.log('NavigationUtil.navigation can not be null:>> ');
  } else {
    navigation.navigate(page, {...params});
  }
};

export default NavigationUtil;
