import React from 'react';
import {  Table , Button} from 'antd';

const CategoryTable = () => {

    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: 'Delete',
            key: 'id',
            dataIndex: 'age',
            render: (_, item) => (
                <Button type="primary" danger onClick={() =>  onDeleteClick(item.name)}>Delete</Button>
              ),

        }
      ];

      const onDeleteClick = (name) => {
        console.log(name) ;
      }

    return(
        <>
        <Table dataSource={dataSource} columns={columns} />
        </>
    );
}

export default CategoryTable ;