from tab import Tab


key_schema_music: dict[str, str] = [
    {
        'AttributeName': 'title',  # Partition key
        'KeyType': 'HASH'  # Partition key
    }
]

attribute_definitions_music: dict[str, str] = [
    {
        'AttributeName': 'title',
        'AttributeType': 'S'  # String type for 'title'
    }
]

provisioned_throughput_music: dict[str, int] = {
    'ReadCapacityUnits': 10,
    'WriteCapacityUnits': 10
}

if __name__ == '__main__':
    table_name: str = 'music'
    
    table = Tab(
        tab_name=table_name,
        input_file="2025a1.json",
        tab_key_schema=key_schema_music,
        tab_attribute_def=attribute_definitions_music,
        pro_throughput=provisioned_throughput_music
    )

    table.create_table()
