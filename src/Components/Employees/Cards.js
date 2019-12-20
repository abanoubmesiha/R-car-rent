import React from 'react'
import data from './data';
import './Conditional.css'

import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

class Cards extends React.Component {
  

 

  render() {
      return (
          <React.Fragment>
        {data.map((card)=>{
          const {Code,Job,Image,Name,Country,Phone} = card
            return (<Card className="CCC" title={`${Code} - ${Job}`}
                            key={Code}
                            size={'small'}
                            style={{ margin: 5 }}
                            actions={[<Icon type="edit" key="edit" />,
                                        <Icon type="delete" />]}>
                    <Meta avatar={<Avatar src={Image} />}
                        title={`${Name}`}
                        description={`${Country} - ${Phone}`} />
            </Card>)
        })}
      </React.Fragment>
    );
  }
}

export default Cards