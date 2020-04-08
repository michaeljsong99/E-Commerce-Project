import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

// We need a class component, because we need to store the state value of the menu items.
class Directory extends React.Component {
    constructor() {
        super();    // pulls in everything from React Component

        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',    // to make the photos larger
                  id: 5,
                  linkUrl: 'mens'
                }
              ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...othersectionProps}) => (
                        <MenuItem key= {id} {...othersectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory; 