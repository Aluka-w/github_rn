import React, {useState} from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

const CITY_NAMES = [
  {
    data: ['北京', '上海', '广州', '深圳'],
    title: '一线城市',
  },
  {
    data: ['杭州', '苏州', '成都', '郑州', '青岛', '厦门', '拉萨', '武汉'],
    title: '二线城市',
  },
  {
    data: ['南昌', '赣州', '济南', '东莞', '惠州', '宿迁'],
    title: '三线城市',
  },
];

const SectionListDemo = () => {
  let [isLoading, setIsLoading] = useState(false);
  let [dataArr, setDataArr] = useState(CITY_NAMES);

  // 列表的渲染方法
  const _renderItem = (data) => (
    <View style={styles.item}>
      <Text style={styles.text}>{data.item}</Text>
    </View>
  );
  // 下拉刷新的方法
  const _loadingData = () => {
    setIsLoading(true);
    setTimeout(() => {
      let tempArr = [];
      for (let i = dataArr.length - 1; i >= 0; i--) {
        tempArr.push(dataArr[i]);
      }
      setDataArr(tempArr);
      setIsLoading(false);
    }, 2000);
  };
  // 上拉加载更多菊花
  const _genInDicator = () => {
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          size={'large'}
          animating={true}
          style={styles.indicator}
          color={'skyblue'}
        />
        <Text>正在加载更多...</Text>
      </View>
    );
  };
  // 上拉加载更多
  const _loadMore = () => {
    setTimeout(() => {
      setDataArr([...dataArr, ...CITY_NAMES]);
    }, 1000);
  };
  // section 的头部
  const _renderSectionHeader = ({section}) => {
    return (
      <View style={styles.sectionHeader}>
        <Text>{section.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SectionList
        sections={dataArr}
        renderItem={(data) => _renderItem(data)}
        // 基本下拉刷新功能
        // refreshing={isLoading}
        // onRefresh={() => _loadingData()}
        // 配置特定下拉刷新的样式
        refreshControl={
          <RefreshControl // 引入的组件
            title={'Loading'}
            colors={['blue']} // android 下的 color
            tintColor={'orange'} // ios下的 loading color
            titleColor={'red'} // ios下的下拉 title
            refreshing={isLoading}
            onRefresh={_loadingData}
          />
        }
        // 上拉加载更多的菊花
        ListFooterComponent={_genInDicator}
        // 上拉加载更多钩子
        onEndReached={_loadMore}
        // 每个 section 的头部
        renderSectionHeader={(data) => _renderSectionHeader(data)}
        // 分割线
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  item: {
    backgroundColor: 'skyblue',
    height: 200,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
  },
  indicatorContainer: {
    alignItems: 'center',
  },
  indicator: {
    color: 'skyblue',
    margin: 10,
  },
  sectionHeader: {
    height: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    flex: 1,
    marginBottom: 15
  }
});
export default SectionListDemo;
