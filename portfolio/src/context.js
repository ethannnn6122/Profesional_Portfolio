import React, {Component} from 'react';

const ProductContext = React.createContext();
//Provider 
//Consumer

class ProductProvider extends Component {
    state = {
        
    };

};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };