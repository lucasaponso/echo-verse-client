from tab import Tab


key_schema: dict[str, str] = [
    {
        'AttributeName': 'email',  # Partition key
        'KeyType': 'HASH'  # Partition key
    }
]

attribute_definitions: dict[str, str] = [
    {
        'AttributeName': 'email',
        'AttributeType': 'S'  # String type for 'email'
    }
]

provisioned_throughput: dict[str, str] = {
    'ReadCapacityUnits': 10,
    'WriteCapacityUnits': 10
}

if __name__ == '__main__':
    table_name: str = 'login'
    
    table = Tab(
        tab_name=table_name,
        input_file="users.json",
        tab_key_schema=key_schema,
        tab_attribute_def=attribute_definitions,
        pro_throughput=provisioned_throughput
    )

    table.create_table()
