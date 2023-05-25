import PropTypes from "prop-types"

import Priority from "../Priority";
import Title from "../Title";
import Text from "../Text";
import { Container, Header, Body, CloseButton } from "./styles"


const TaskInfo = ({ task, onClose }) => {
  const { name, priority, description } = task;
  return (
    <Container>
      <CloseButton onClick={() => onClose()} />
      <Header>
        <Title title={name} />
        <Priority priority={priority} />
      </Header>
      <Body>
        <Text text="Descrição:" />
        <Text text={description} />
      </Body>
    </Container>
  )
}

TaskInfo.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    accomplished: PropTypes.bool.isRequired,
    priority: PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TaskInfo;
