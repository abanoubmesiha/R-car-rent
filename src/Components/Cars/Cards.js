import React from 'react'
import './Conditional.css'

import { Card, Icon, Avatar,Pagination } from 'antd';

const { Meta } = Card;

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          minValue: 0,
          maxValue: 9
        };
      }
      handleChange = value => {
        if (value <= 1) {
          this.setState({
            minValue: 0,
            maxValue: 9
          });
        } else {
          this.setState({
            minValue: this.state.maxValue,
            maxValue: value * 9
          });
        }
      };
      render() {
        const {data} = this.props
        return (
          <React.Fragment>
            
                {data &&
                data.length > 0 &&
                data.slice(this.state.minValue, this.state.maxValue).map((card)=>{
                const {Code,Name,MDate,Brand,Model,Color,Image,File,Edit,Del,Car,Tool} = card
                    return (
                    <Card className="CCard" title={`${Code} - ${Brand} - ${Model} `}
                                    key={Code}
                                    size={'small'}
                                    style={{ margin: 5 }}
                                    actions={[<Icon type="file-search" />,
                                              <Icon type="form" />,
                                              <Icon type="delete" theme="twoTone" />,
                                              <Icon type="car" theme="filled" />,
                                              <Icon type="tool" theme="filled" />]}>
                            <Meta avatar={<Avatar src={Image} />}
                                title={`${Name}`}
                                description={`${Color} - ${MDate}`} />
                    </Card>)
        })}
        <Pagination className="CPagination" defaultCurrent={1} defaultPageSize={9}
            onChange={this.handleChange}
            total={data.length} showQuickJumper />
      </React.Fragment>
    );
  }
}

export default Cards