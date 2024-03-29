import { useState } from 'react'
import {
  Button,
  Title,
  Container,
  Group,
  TextInput,
  List,
  Text,
  Flex,
} from '@mantine/core'

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  
  const onSubmit = () => {
    setTodos([...todos, value]);
    setValue('');
  };

  const onDone = (index) => {
    const newData = [...todos];
    if (index > -1) {
      newData.splice(index, 1);
    }
    setTodos(newData);
  };

  return (
    <Container size="lg">
      <Title size="xl" p="lg" style={{ textAlign: "center" }}>
        Welcole To React Todo App
      </Title>
      <Group align="end">
        <TextInput
          label="Todo"
          placeholder="Insert Your Todo Here"
          onChange={(e)=> {
            setValue(e.target.value)
          }}
          value={value}
        />
        <Button color="blue" onClick={onSubmit} disabled={!value}>Submit</Button>
      </Group>
      <List mt="lg">
        {todos.length ? todos.map((todo, index) => (
          <List.Item key={index} mb="lg">
            <Flex gap="md">
              <Text>{todo}</Text>
              <Button color="green" onClick={()=> onDone(index)}>Done</Button>
            </Flex>
          </List.Item>
        )): <Text>No Todos Available</Text>}
      </List>
    </Container>
  )
}

export default App
