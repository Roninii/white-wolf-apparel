import React from 'react';

import collections from '../../api/shop-data';

import CollectionPreview from '../../components/collection-preview/collection-preview';

export default class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections,
        };
    }

    render() {
        const { collections } = this.state;

        return (
            <div className='shop-page'>
                {collections.map(({ id, ...collectionProps }) => (
                    <CollectionPreview key={id} {...collectionProps} />
                ))}
            </div>
        );
    }
}
