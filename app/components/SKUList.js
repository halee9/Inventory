import React, { Component } from 'react';
import {
  ListView,
  View,
  StyleSheet
} from 'react-native';
import SKUListItem from './SKUListItem';
import SearchHeader from './SearchHeader';
import Sectionalize from './Sectionalize';
import SectionHeader from './SectionHeader';

class SKUList extends Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];
    this.dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
        getSectionData,
        getRowData,
    });
  }
  componentDidMount() {
    this.props.onFetchInventory();
  }
  componentWillReceiveProps(nextProps) {
    const { dataBlob, sectionIds, rowIds } = Sectionalize(nextProps.inventories.skus);
    this.dataSource = this.dataSource.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
  }
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.dataSource}
        renderRow={(data, secId, rowId, highlightRow) =>
          <SKUListItem {...data} rowId={rowId} onPress={this.props.onClickToggle.bind(this, data)} />
        }
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
        renderHeader={() => <SearchHeader />}
        renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
      />
    )
  }
}

export default SKUList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 63,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
