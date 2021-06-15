import React from 'react';
import { View,
    Text,
    FlatList,
    SafeAreaView,
     Alert,
     RefreshControl} from 'react-native';
import axios from 'axios';

import Item from './Item'

export default class AxiosMain extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading:true,
            isRefresh:false,
            page:1
        }
    }
    componentDidMount(){
        /*axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=>{
            this.setState({data:res.data})
        })
        .catch((e)=>console.log(e))*/
        this.fetchUser();
    }

    fetchUser(page=1){
        const url=`https://api.stackexchange.com/2.2/users?page=${page}&order=desc&sort=reputation&site=stackoverflow`;
        axios.get(url).then((res)=>{
            this.setState({page,data:res.data.items,loading:false,isRefresh:false})
        }).catch((e)=>alert(e))
        
    }
    _renderItem=({item})=>{
        return <Item item={item} /> 
    }
    onRefresh=()=>{
        this.setState({isRefresh:true});
        this.fetchUser();
    }

    LoadMore=()=>{
        const{page}=this.state;
        var newPage=page+1;
        this.fetchUser(newPage);
  
    }
    render(){
        const{data,loading,isRefresh}=this.state;
        return(
            <SafeAreaView>
                {(loading) ? <View><Text>Yükleniyor..</Text></View>
                : <FlatList 
                style={{padding:10,backgroundColor:'#f5f5f5'}}
                data={data}
                numColumns={1} //column count, default (1)
                keyExtractor={(item,index)=>index.toString()}
                refreshControl={
                    <RefreshControl
                    refreshing={isRefresh}
                    onRefresh={this.onRefresh}
                    />
                }
                renderItem={this._renderItem}

                ListEmptyComponent={()=><View><Text>Veri Yok</Text></View>}

                ListFooterComponent={()=><View><Text>Flat List Sonu</Text></View>}
                ListFooterComponentStyle={{backgroundColor:'red',padding:10}}
                
                ListHeaderComponent={()=><View><Text>Falt List Başı</Text></View>}
                ListHeaderComponentStyle={{backgroundColor:'purple',padding:10}}

                onEndReachedThreshold={0.4}
                onEndReached={this.LoadMore}

                //ItemSeparatorComponent={this.renderSeperator}

               
                />
    }
    
            </SafeAreaView>
        )
    }
}