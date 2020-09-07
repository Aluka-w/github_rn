import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

const CITY_NAMES = [
  '南昌市',
  '赣州市',
  '上饶市',
  '宜春市',
  '景德镇市',
  '新余市',
  '九江市',
  '萍乡市',

  '抚州市',
  '鹰潭市',
  // "吉安市",
  // "丰城市",
  // "樟树市",
  // "德兴市",
  // "瑞金市",
  // "井冈山市",

  // "高安市",
  // "乐平市",
  // "南康市",
  // "贵溪市",
  // "瑞昌市",
  // "东乡县",
  // "广丰县",
  // "信州区",
  // "三清山",
];

function FlatListDemo() {
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

  return (
    <View style={styles.container}>
      {/* <Text> FlatListDemo </Text> */}
      <FlatList
        data={dataArr}
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
            onRefresh={() => _loadingData()}
          />
        }
        // 上拉加载更多的菊花
        ListFooterComponent={_genInDicator}
        // 上拉加载更多钩子
        onEndReached={_loadMore}
      />
    </View>
  );
}

FlatListDemo.navigationOptions = {
  title: '测试自定义页面标题',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default FlatListDemo;
